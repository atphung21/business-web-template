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

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p>
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
        {" · "}
        <Link to="/">Home</Link>
        {" · "}
        <Link to="/about">About</Link>
        {" · "}
        <Link to="/packages">Packages</Link>
        {" · "}
        <Link to="/faq">FAQ</Link>
        {" · "}
        <Link to="/contact">Contact</Link>
        {" · "}
        <Link to="/blackjack">View a Custom Demo</Link>
      </p>
    </div>
  </footer>
);

const FaqPage = () => {
  const consultRef = useRef(null);
  const seo = PAGE_SEO.faq;

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/faq" });
    window.scrollTo(0, 0);
  }, [seo]);

  const jsonLd = businessJsonLd({
    path: "/faq",
    title: seo.title,
    description: seo.description,
    faqs: faq,
  });

  return (
    <div className="landing-page faq-page">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <PageBackLink />
      <section className="section about-band">
        <div className="section__inner section__inner--narrow">
          <p className="section__eyebrow">Questions</p>
          <h1 className="section__title">Frequently Asked Questions</h1>
          <p className="section__lead">{faqPageLead}</p>
          <nav className="faq-jump" aria-label="Question topics">
            {faqCategories.map((group) => (
              <a key={group.id} href={`#${group.id}`}>
                {group.title}
              </a>
            ))}
          </nav>
        </div>
      </section>
      {faqCategories.map((group, index) => {
        const items = faq.filter((item) => item.category === group.title);
        const light = index % 2 === 0;
        return (
          <section
            key={group.id}
            id={group.id}
            className={`section about-band${light ? " about-band--light" : ""}`}
            aria-labelledby={`${group.id}-heading`}
          >
            <div className="section__inner section__inner--narrow">
              <h2 id={`${group.id}-heading`} className="section__title">
                {group.title}
              </h2>
              <p className="section__lead">{group.intro}</p>
              <div className="faq-list">
                {items.map((item) => (
                  <details key={item.question} className="faq-item">
                    <summary>{item.question}</summary>
                    <p>{item.answer}</p>
                  </details>
                ))}
              </div>
              {index === faqCategories.length - 1 && (
                <div className="packages-page__actions">
                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={() => consultRef.current?.open()}
                  >
                    Request a Free Consultation
                  </button>
                  <Link to="/contact" className="btn btn--navy">
                    Contact Us
                  </Link>
                </div>
              )}
            </div>
          </section>
        );
      })}
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
