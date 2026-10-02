import { useEffect } from "react";

/** Adds `is-revealed` once the element enters (or is near) the viewport. */
export const useRevealOnScroll = (ref) => {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      el.classList.add("is-revealed");
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      reveal();
      return;
    }

    const inView = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh + 120 && rect.bottom > -40;
    };

    if (inView()) {
      reveal();
      return;
    }

    const onScroll = () => {
      if (inView()) {
        reveal();
        window.removeEventListener("scroll", onScroll, { capture: true });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true, capture: true });

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "120px 0px" }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll, { capture: true });
    };
  }, [ref]);
};
