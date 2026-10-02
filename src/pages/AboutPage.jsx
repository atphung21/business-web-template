import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { AboutUsSection } from "../components/aboutUsSection/AboutUsSection";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { about, business } from "../content/siteContent";
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

const AboutPage = () => {
  const consultRef = useRef(null);
  const seo = PAGE_SEO.about;

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/about" });
    window.scrollTo(0, 0);
  }, [seo]);

  const jsonLd = businessJsonLd({
    path: "/about",
    title: seo.title,
    description: seo.description,
  });

  return (
    <div className="landing-page about-page">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <PageBackLink />
      <AboutUsSection
        headline={about.headline}
        paragraphs={about.paragraphs}
        founderNote={about.founderNote}
        headingLevel="h1"
        className="about-band"
      />
      <section
        className="section about-band about-band--light"
        aria-labelledby="who-we-serve"
      >
        <div className="section__inner section__inner--narrow">
          <p className="section__eyebrow">Clients</p>
          <h2 id="who-we-serve" className="section__title">
            {about.whoWeServeTitle}
          </h2>
          <p className="section__lead">{about.whoWeServeLead}</p>
          <ul className="about-serve-grid">
            {about.whoWeServe.map((item) => (
              <li key={item} className="about-serve-card">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="section about-band" aria-labelledby="how-we-work">
        <div className="section__inner section__inner--narrow">
          <p className="section__eyebrow">Approach</p>
          <h2 id="how-we-work" className="section__title">
            {about.howWeWorkTitle}
          </h2>
          <div className="about-note-grid">
            <article className="about-note-card">
              <h3>From Consultation to Launch</h3>
              <p>{about.howWeWorkLead}</p>
            </article>
            <article className="about-note-card">
              <h3>After Go-Live</h3>
              <p>{about.ownershipNote}</p>
            </article>
          </div>
        </div>
      </section>
      <section
        className="section about-band about-band--light"
        aria-labelledby="where-we-work"
      >
        <div className="section__inner section__inner--narrow">
          <p className="section__eyebrow">Service area</p>
          <h2 id="where-we-work" className="section__title">
            {about.areaTitle}
          </h2>
          <p className="section__lead">{about.areaLead}</p>
          <ul className="about-contact-facts">
            <li>
              <span>Phone</span>
              <a href={`tel:${business.phone.replace(/\D/g, "")}`}>
                {business.phone}
              </a>
            </li>
            <li>
              <span>Email</span>
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </li>
          </ul>
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

export default AboutPage;
