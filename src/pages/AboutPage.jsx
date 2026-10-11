import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { about, business } from "../content/siteContent";
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

const ABOUT_NAV = [
  { id: "firm", label: "The Firm" },
  { id: "clients", label: "Who We Serve" },
  { id: "approach", label: "How We Work" },
  { id: "area", label: "Where We Work" },
];

const AboutPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.about;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/about" });
    window.scrollTo(0, 0);
  }, [seo]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".about-chapter")];
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
    path: "/about",
    title: seo.title,
    description: seo.description,
  });

  return (
    <div className="landing-page about-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="about-offer__hero">
        <div className="about-offer__hero-inner">
          <PageBackLink />
          <p className="about-offer__place">Irvine, California</p>
          <h1>A software engineer-led consultancy for small businesses.</h1>
          <p className="about-offer__lead">{about.teaser}</p>
          <div className="about-offer__actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/services" className="btn btn--secondary">
              See All Services
            </Link>
          </div>
        </div>
      </header>
      <nav className="about-offer__index" aria-label="About sections on this page">
        <ol>
          {ABOUT_NAV.map((item, index) => (
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
        <article id="firm" className="about-chapter">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              01
            </p>
            <div className="about-chapter__body">
              <h2>
                {about.headline}
                <span className="about-chapter__rule" />
              </h2>
              {about.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 48)}>{paragraph}</p>
              ))}
              <p className="about-chapter__note">{about.founderNote}</p>
            </div>
          </div>
        </article>
        <article id="clients" className="about-chapter about-chapter--band">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              02
            </p>
            <div className="about-chapter__body">
              <h2>
                {about.whoWeServeTitle}
                <span className="about-chapter__rule" />
              </h2>
              <p>{about.whoWeServeLead}</p>
              <ul className="about-chapter__clients">
                {about.whoWeServe.map((item) => (
                  <li key={item}>{item.replace(/\.$/, "")}</li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article id="approach" className="about-chapter">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              03
            </p>
            <div className="about-chapter__body">
              <h2>
                {about.howWeWorkTitle}
                <span className="about-chapter__rule" />
              </h2>
              <ul className="about-chapter__steps">
                <li>
                  <strong>From Consultation to Launch</strong>
                  <span>{about.howWeWorkLead}</span>
                </li>
                <li>
                  <strong>After Go-Live</strong>
                  <span>{about.ownershipNote}</span>
                </li>
              </ul>
            </div>
          </div>
        </article>
        <article id="area" className="about-chapter about-chapter--featured">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              04
            </p>
            <div className="about-chapter__body">
              <h2>
                {about.areaTitle}
                <span className="about-chapter__rule" />
              </h2>
              <p>{about.areaLead}</p>
              <ul className="about-chapter__facts">
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
      <section className="about-offer__close">
        <div className="about-offer__close-inner">
          <p>Free initial consultation. No obligation. We reply within 1–2 business days.</p>
          <div className="about-offer__actions">
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
