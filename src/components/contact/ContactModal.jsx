import React, { useState, forwardRef, useImperativeHandle, useEffect, useRef } from "react";
import { ContactFormFields } from "./ContactFormFields";
import { business } from "../../content/siteContent";
import "./contact.css";

const ContactModal = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);

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

    return () => {
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
          aria-label="Close consultation form"
        >
          <span aria-hidden="true">×</span>
        </button>

        <aside className="contact-modal__aside">
          <p className="contact-modal__eyebrow">Free consultation</p>
          <h2 id="contact-modal-title" className="contact-modal__title">
            Let&apos;s talk about your project
          </h2>
          <p className="contact-modal__intro">
            Share a few details and we&apos;ll follow up with honest recommendations
            — no pressure, no obligation.
          </p>
          <ul className="contact-modal__benefits">
            <li>Response within 1–2 business days</li>
            <li>Clear scope and pricing after we understand your goals</li>
            <li>Local small-business focus</li>
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
          </div>
        </aside>

        <div className="contact-modal__form-wrap">
          <ContactFormFields formId="contact-modal-form" />
        </div>
      </div>
    </div>
  );
});

ContactModal.displayName = "ContactModal";

export default ContactModal;
