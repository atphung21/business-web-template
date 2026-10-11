import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import { ContactFormFields } from "../components/contact/ContactFormFields";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business } from "../content/siteContent";
import { applyPageSeo, businessJsonLd, PAGE_SEO } from "../content/seo";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p>
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        {" · "}
        <Link to="/">Home</Link>
        {" · "}
        <Link to="/services">Services</Link>
        {" · "}
        <Link to="/clients">Clients</Link>
        {" · "}
        <Link to="/about">About</Link>
        {" · "}
        <Link to="/packages">Packages</Link>
        {" · "}
        <Link to="/faq">FAQ</Link>
        {" · "}
        <Link to="/blog">Blog</Link>
        {" · "}
        <Link to="/contact">Contact</Link>
        {" · "}
        <Link to="/blackjack">View a Custom Demo</Link>
        {" · "}
        <a href={business.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>
  </footer>
);

const CONTACT_NAV = [
  { id: "message", label: "Send a Message" },
  { id: "consultation", label: "Free Consultation" },
  { id: "direct", label: "Phone and Email" },
];

const CONSULT_POINTS = [
  "30-minute time on your calendar",
  "Honest recommendations, with no obligation",
  "A clear scope and investment range after the call",
];

const ContactPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.contact;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/contact" });
    window.scrollTo(0, 0);
  }, [seo]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".contact-chapter")];
    if (!chapters.length) return undefined;
    const ratios = new Map();
    const mark = () => {
      let current = null;
      let best = 0;
      chapters.forEach((chapter) => {
        const ratio = ratios.get(chapter) || 0;
        if (ratio > best) {
          best = ratio;
          current = chapter;
        }
      });
      chapters.forEach((chapter) => {
        chapter.classList.toggle("is-current", chapter === current && best > 0.12);
      });
    };
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => ratios.set(entry.target, entry.intersectionRatio));
        mark();
      },
      { threshold: [0.12, 0.28, 0.45, 0.65, 0.85] }
    );
    chapters.forEach((chapter) => observer.observe(chapter));
    return () => observer.disconnect();
  }, []);

  const jsonLd = businessJsonLd({
    path: "/contact",
    title: seo.title,
    description: seo.description,
  });

  const openConsult = () => consultRef.current?.open();

  return (
    <div className="landing-page contact-offer">
      <Nav businessName={business.shortName} onConsultClick={openConsult} />
      <header className="contact-offer__hero">
        <div className="contact-offer__hero-inner">
          <PageBackLink />
          <p className="contact-offer__place">Irvine, California</p>
          <h1>Send a message, or book a free consultation.</h1>
          <p className="contact-offer__lead">
            Tell us about your website, SEO, or marketing goals. We&apos;ll
            recommend a practical next step — or call{" "}
            <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>.
          </p>
          <div className="contact-offer__actions">
            <button type="button" className="btn btn--primary" onClick={openConsult}>
              Request a Free Consultation
            </button>
            <a href="#message" className="btn btn--secondary">
              Send a Message
            </a>
          </div>
        </div>
      </header>
      <nav className="contact-offer__index" aria-label="Ways to reach ATP Consulting Services">
        <ol>
          {CONTACT_NAV.map((item, index) => (
            <li key={item.id}>
              <a href={`#${item.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div ref={sectionRef}>
        <article id="message" className="contact-chapter">
          <div className="contact-chapter__inner">
            <p className="contact-chapter__num" aria-hidden="true">
              01
            </p>
            <div className="contact-chapter__body">
              <h2>
                Send a Message
                <span className="contact-chapter__rule" />
              </h2>
              <p>
                Share a few details and we reply within 1–2 business days. Choose
                Free consultation if you want that to be the subject of the note.
              </p>
              <div className="contact-chapter__form">
                <ContactFormFields formId="contact-page-form" />
              </div>
            </div>
          </div>
        </article>
        <article id="consultation" className="contact-chapter contact-chapter--band">
          <div className="contact-chapter__inner">
            <p className="contact-chapter__num" aria-hidden="true">
              02
            </p>
            <div className="contact-chapter__body">
              <h2>
                Free Consultation
                <span className="contact-chapter__rule" />
              </h2>
              <p>
                Pick a 30-minute time. You get honest recommendations on the
                website, SEO, or marketing work that fits — no pressure and no
                obligation.
              </p>
              <ul className="contact-chapter__points">
                {CONSULT_POINTS.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
              <div className="contact-chapter__actions">
                <button type="button" className="btn btn--primary" onClick={openConsult}>
                  Request a Free Consultation
                </button>
              </div>
            </div>
          </div>
        </article>
        <article id="direct" className="contact-chapter contact-chapter--featured">
          <div className="contact-chapter__inner">
            <p className="contact-chapter__num" aria-hidden="true">
              03
            </p>
            <div className="contact-chapter__body">
              <h2>
                Phone and Email
                <span className="contact-chapter__rule" />
              </h2>
              <p>
                Based in Irvine, CA, and available remotely for small businesses
                across the United States.
              </p>
              <ul className="contact-chapter__facts">
                <li>
                  <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
                </li>
                <li>
                  <a href={`mailto:${business.email}`}>{business.email}</a>
                </li>
                <li>
                  <a href={business.linkedin} target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </article>
      </div>
      <section className="contact-offer__close">
        <div className="contact-offer__close-inner">
          <p>Free initial consultation. No obligation. We reply within 1–2 business days.</p>
          <div className="contact-offer__actions">
            <button type="button" className="btn btn--primary" onClick={openConsult}>
              Request a Free Consultation
            </button>
            <Link to="/faq" className="btn btn--navy">
              Read the FAQ
            </Link>
          </div>
        </div>
      </section>
      <Footer />
      <ContactModal ref={consultRef} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ContactPage;
