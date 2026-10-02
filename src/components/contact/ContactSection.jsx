import React from "react";
import { ContactFormFields } from "./ContactFormFields";
import { business } from "../../content/siteContent";

export const ContactSection = ({ headingLevel = "h2", formId = "contact-page-form" }) => {
  const Heading = headingLevel;

  return (
    <section className="section contact-section" aria-labelledby="contact-heading">
      <div className="section__inner">
        <p className="section__eyebrow">Next step</p>
        <Heading id="contact-heading" className="section__title">
          Start a conversation
        </Heading>
        <p className="section__lead">
          Tell us about your website, SEO, or marketing goals. We&apos;ll recommend
          a practical next step — or call{" "}
          <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>.
        </p>
        <div className="contact-layout">
          <div className="contact-layout__info">
            <h3>Get in touch</h3>
            <ul className="contact-layout__list">
              <li>Free initial consultation</li>
              <li>Reply within 1–2 business days</li>
              <li>Serving {business.serviceArea}</li>
            </ul>
            <p className="contact-layout__detail">
              <strong>Phone</strong>
              <a href={`tel:${business.phone.replace(/\D/g, "")}`}>
                {business.phone}
              </a>
            </p>
            <p className="contact-layout__detail">
              <strong>Email</strong>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
          </div>
          <div className="contact-layout__form-card">
            <h3 className="contact-layout__form-title">Send a message</h3>
            <p className="contact-layout__form-lead">
              Fill out the form and we&apos;ll get back to you shortly.
            </p>
            <ContactFormFields formId={formId} />
          </div>
        </div>
      </div>
    </section>
  );
};
