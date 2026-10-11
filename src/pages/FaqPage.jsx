import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import {
  business,
  faq,
  faqCategories,
  faqPageLead,
} from "../content/siteContent";
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

const linkContactDetails = (answer) => {
  const phone = business.phone;
  const email = business.email;
  const pattern = new RegExp(
    `(${phone.replace(/[()]/g, "\\$&")}|${email.replace(/\./g, "\\.")})`,
    "g"
  );
  return answer.split(pattern).map((part, index) => {
    if (part === phone) {
      return (
        <a key={`${part}-${index}`} href={`tel:${phone.replace(/\D/g, "")}`}>
          {phone}
        </a>
      );
    }
    if (part === email) {
      return (
        <a key={`${part}-${index}`} href={`mailto:${email}`}>
          {email}
        </a>
      );
    }
    return part;
  });
};

const FaqPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.faq;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/faq" });
    window.scrollTo(0, 0);
  }, [seo]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".faq-chapter")];
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
    path: "/faq",
    title: seo.title,
    description: seo.description,
    faqs: faq,
  });

  return (
    <div className="landing-page faq-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="faq-offer__hero">
        <div className="faq-offer__hero-inner">
          <PageBackLink />
          <p className="faq-offer__kicker">Questions</p>
          <h1>Answers about cost, timelines, and getting found.</h1>
          <p className="faq-offer__lead">{faqPageLead}</p>
          <div className="faq-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/contact" className="btn btn--secondary">
              Contact Us
            </Link>
          </div>
        </div>
      </header>
      <nav className="faq-offer__index" aria-label="Question topics">
        <ol>
          {faqCategories.map((group, index) => (
            <li key={group.id}>
              <a href={`#${group.id}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {group.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div ref={sectionRef}>
        {faqCategories.map((group, index) => {
          const items = faq.filter((item) => item.category === group.title);
          const tone =
            index === faqCategories.length - 1
              ? " faq-chapter--featured"
              : index % 2
                ? " faq-chapter--band"
                : "";
          return (
            <article
              key={group.id}
              id={group.id}
              className={`faq-chapter${tone}`}
              aria-labelledby={`${group.id}-heading`}
            >
              <div className="faq-chapter__inner">
                <p className="faq-chapter__num" aria-hidden="true">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <div className="faq-chapter__body">
                  <h2 id={`${group.id}-heading`}>
                    {group.title}
                    <span className="faq-chapter__rule" />
                  </h2>
                  <p>{group.intro}</p>
                  <div className="faq-chapter__list">
                    {items.map((item) => (
                      <details key={item.question} className="faq-item">
                        <summary>{item.question}</summary>
                        <p>{linkContactDetails(item.answer)}</p>
                      </details>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <section className="faq-offer__close">
        <div className="faq-offer__close-inner">
          <p>Free initial consultation. No obligation. We reply within 1–2 business days.</p>
          <div className="faq-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/services" className="btn btn--navy">
              See All Services
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

export default FaqPage;
