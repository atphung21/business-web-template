import React, { useCallback, useEffect, useRef, useState } from "react";

export const TestimonialsCarousel = ({ items }) => {
  const trackRef = useRef(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const max = track.scrollWidth - track.clientWidth;
    setCanPrev(track.scrollLeft > 8);
    setCanNext(track.scrollLeft < max - 8);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    updateArrows();
    const observer = new ResizeObserver(updateArrows);
    observer.observe(track);
    window.addEventListener("resize", updateArrows);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateArrows);
    };
  }, [items, updateArrows]);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector(".testimonial-card");
    const gap = 20;
    const amount = (card?.getBoundingClientRect().width || 320) + gap;
    track.scrollBy({ left: direction * amount, behavior: "smooth" });
  };

  return (
    <div className="testimonials-rail">
      <button
        type="button"
        className="testimonials-rail__nav testimonials-rail__nav--prev"
        aria-label="Previous testimonials"
        disabled={!canPrev}
        onClick={() => scrollByCard(-1)}
      >
        ‹
      </button>
      <div
        ref={trackRef}
        className="testimonials-rail__track"
        role="region"
        aria-label="Client testimonials carousel"
        tabIndex={0}
        onScroll={updateArrows}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft") {
            event.preventDefault();
            scrollByCard(-1);
          }
          if (event.key === "ArrowRight") {
            event.preventDefault();
            scrollByCard(1);
          }
        }}
      >
        {items.map((item) => (
          <blockquote
            key={item.name + item.business}
            className="testimonial-card"
          >
            <p>&ldquo;{item.quote}&rdquo;</p>
            <footer>
              <cite>{item.name}</cite>
              <span>{item.business}</span>
            </footer>
          </blockquote>
        ))}
      </div>
      <button
        type="button"
        className="testimonials-rail__nav testimonials-rail__nav--next"
        aria-label="Next testimonials"
        disabled={!canNext}
        onClick={() => scrollByCard(1)}
      >
        ›
      </button>
    </div>
  );
};
