import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business, services, servicesIncludedNote } from "../content/siteContent";
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

const SERVICE_ANCHORS = ["consultation", "websites", "seo", "marketing", "analytics"];

const ServicesPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.services;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/services" });
    const id = window.location.hash.replace("#", "");
    if (!id) {
      window.scrollTo(0, 0);
      return;
    }
    document.getElementById(id)?.scrollIntoView();
  }, [seo]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".service-chapter")];
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
    path: "/services",
    title: seo.title,
    description: seo.description,
    services,
  });

  return (
    <div className="landing-page services-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="services-offer__hero">
        <div className="services-offer__hero-inner">
          <PageBackLink />
          <p className="services-offer__place">Irvine, California</p>
          <h1>A website, search presence, and marketing plan that fit a small business.</h1>
          <p className="services-offer__lead">
            ATP Consulting Services is based in Irvine, CA. We meet Orange
            County clients in person when it helps, and we work remotely with
            small businesses across the United States. Pricing is scoped after a
            free consultation.
          </p>
          <div className="services-offer__hero-actions">
            <button
              type="button"
              className="btn btn--primary"
              onClick={() => consultRef.current?.open()}
            >
              Request a Free Consultation
            </button>
            <Link to="/packages" className="btn btn--secondary">
              See Website Packages
            </Link>
          </div>
        </div>
      </header>
      <nav className="services-offer__index" aria-label="Services on this page">
        <ol>
          {services.map((service, index) => (
            <li key={service.title}>
              <a href={`#${SERVICE_ANCHORS[index]}`}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {service.title}
              </a>
            </li>
          ))}
        </ol>
      </nav>
      <div ref={sectionRef}>
        {services.map((service, index) => (
          <article
            key={service.title}
            id={SERVICE_ANCHORS[index]}
            className={`service-chapter${index % 2 ? " service-chapter--band" : ""}`}
          >
            <div className="service-chapter__inner">
              <p className="service-chapter__num" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </p>
              <div className="service-chapter__body">
                <h2>
                  {service.title}
                  <span className="service-chapter__rule" />
                </h2>
                <p>{service.details}</p>
                <ul>
                  {service.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </div>
      <section className="services-offer__close">
        <div className="services-offer__close-inner">
          <p>{servicesIncludedNote}</p>
          <div className="services-offer__hero-actions">
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

export default ServicesPage;
