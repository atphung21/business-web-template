import React, { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { business } from "../../content/siteContent";
import "./contact.css";

const CALENDLY_URL = "https://calendly.com/atp-software-consulting/30min";
const CALENDLY_SCRIPT = "https://assets.calendly.com/assets/external/widget.js";

function loadCalendly() {
  if (window.Calendly) return Promise.resolve();
  return new Promise((resolve, reject) => {
    const finish = () => {
      if (window.Calendly) resolve();
    };
    const existing = document.querySelector(`script[src="${CALENDLY_SCRIPT}"]`);
    if (existing) {
      existing.addEventListener("load", finish, { once: true });
      existing.addEventListener("error", reject, { once: true });
      finish();
      return;
    }
    const script = document.createElement("script");
    script.src = CALENDLY_SCRIPT;
    script.async = true;
    script.onload = finish;
    script.onerror = () => reject(new Error("Calendly failed to load"));
    document.body.appendChild(script);
  });
}

const ContactModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const calendlyRef = useRef(null);

  useImperativeHandle(ref, () => ({
    open: () => setIsOpen(true),
    close: () => setIsOpen(false),
  }));

  const close = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const onKeyDown = (event) => {
      if (event.key === "Escape") close();
    };
    window.addEventListener("keydown", onKeyDown);

    let cancelled = false;
    loadCalendly()
      .then(() => {
        if (cancelled || !calendlyRef.current || !window.Calendly) return;
        calendlyRef.current.innerHTML = "";
        window.Calendly.initInlineWidget({
          url: CALENDLY_URL,
          parentElement: calendlyRef.current,
        });
      })
      .catch(() => {});

    return () => {
      cancelled = true;
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="contact-modal"
      role="presentation"
      onClick={close}
    >
      <div
        className="contact-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="contact-modal__close"
          onClick={close}
          aria-label="Close consultation scheduler"
        >
          <span aria-hidden="true">×</span>
        </button>

        <aside className="contact-modal__aside">
          <p className="contact-modal__eyebrow">Free consultation</p>
          <h2 id="contact-modal-title" className="contact-modal__title">
            Let&apos;s talk about your project
          </h2>
          <p className="contact-modal__intro">
            Choose a 30-minute time. You&apos;ll get honest recommendations — no
            pressure, no obligation.
          </p>
          <ul className="contact-modal__benefits">
            <li>30-minute consultation on your calendar</li>
            <li>Clear scope and pricing after we understand your goals</li>
            <li>Based in Irvine, working with small businesses nationwide</li>
          </ul>
          <div className="contact-modal__direct">
            <p>
              <span>Phone</span>
              <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
            </p>
            <p>
              <span>Email</span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <p>
              <span>LinkedIn</span>
              <a href={business.linkedin} target="_blank" rel="noopener noreferrer">
                Company page
              </a>
            </p>
          </div>
        </aside>

        <div className="contact-modal__form-wrap">
          <div
            ref={calendlyRef}
            className="contact-modal__calendly"
            data-url={CALENDLY_URL}
          />
        </div>
      </div>
    </div>
  );
});

ContactModal.displayName = "ContactModal";

export default ContactModal;
