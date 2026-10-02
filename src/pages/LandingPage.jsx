import React, { useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../App.css";
import { LogoHero } from "../components/brand/LogoHero";
import ContactModal from "../components/contact/ContactModal";
import "../components/contact/contact.css";
import { Nav } from "../components/nav/Nav";
import { PackagesTeaserRail } from "../components/packageCard/PackagesTeaserRail";
import { ServicesCarousel } from "../components/servicesCarousel/ServicesCarousel";
import { TestimonialsCarousel } from "../components/testimonials/TestimonialsCarousel";
import {
  business,
  hero,
  processSteps,
  services,
  servicesIncludedNote,
  servicesLead,
  testimonials,
  trustPoints,
  websitePackages,
} from "../content/siteContent";
import { applyPageSeo, businessJsonLd, PAGE_SEO } from "../content/seo";
import { handleInitialHash, scrollToSection } from "../utils/scroll";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";

const HeroSection = ({ onConsultClick }) => (
  <section className="hero-section" aria-labelledby="hero-heading">
    <div className="hero-section__inner">
      <div className="hero-section__brand">
        <LogoHero name="ATP" descriptor="Consulting Services" />
      </div>
      <h1 id="hero-heading" className="hero-section__headline">
        {hero.headline}
      </h1>
      <p className="hero-section__subheadline">{hero.subheadline}</p>
      <div className="hero-section__actions">
        <button
          type="button"
          className="btn btn--primary"
          onClick={onConsultClick}
        >
          {hero.primaryCta}
        </button>
        <button
          type="button"
          className="btn btn--secondary"
          onClick={(event) => scrollToSection("services", event)}
        >
          {hero.secondaryCta}
        </button>
      </div>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="trust-section" aria-labelledby="trust-heading">
    <div className="section__inner">
      <p className="trust-section__eyebrow">Why work with us</p>
      <h2 id="trust-heading" className="trust-section__title">
        A Practical Partner for Growing Businesses.
      </h2>
      <div className="trust-grid">
        {trustPoints.map((point) => (
          <article key={point.title} className="trust-card">
            <h3>{point.title}</h3>
            <p>{point.description}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const ServicesSection = () => (
  <section id="services" className="section services-section">
    <div className="section__inner">
      <p className="section__eyebrow">Capabilities</p>
      <h2 className="section__title">
        Website, SEO, and Digital Marketing Services.
      </h2>
      <p className="section__lead">{servicesLead}</p>
      <ServicesCarousel services={services} />
      <p className="services-included-note">{servicesIncludedNote}</p>
    </div>
  </section>
);

const PackagesSection = () => {
  const sectionRef = useRef(null);
  useRevealOnScroll(sectionRef);

  return (
    <section id="packages" className="section packages-section" ref={sectionRef}>
      <div className="section__inner">
        <p className="section__eyebrow">Engagement options</p>
        <h2 className="section__title">Website Packages for Small Business.</h2>
        <p className="section__lead">
          Starter informational sites, local-service sites, product catalogs, and
          custom builds — for contractors, salons, clinics, restaurants, and
          professional practices. Final pricing is customized after a free
          consultation.
        </p>
        <PackagesTeaserRail packages={websitePackages} />
        <p className="packages-disclaimer">
          All packages include mobile-responsive design, secure hosting guidance,
          and launch support. Add SEO, marketing, or automation anytime.
        </p>
        <p className="packages-page-jump">
          <Link to="/packages" className="btn btn--navy">
            See Package Details
          </Link>
        </p>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section id="process" className="section process-section">
    <div className="section__inner">
      <p className="section__eyebrow">How we work</p>
      <h2 className="section__title">A Clear Four-Step Engagement.</h2>
      <p className="section__lead">
        From the first conversation through launch and optional support.
      </p>
      <ol className="process-track">
        {processSteps.map((item) => (
          <li key={item.step} className="process-phase">
            <span className="process-phase__marker" aria-hidden="true" />
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

const CloseBand = ({ onConsultClick }) => (
  <section className="consult-band" aria-labelledby="consult-heading">
    <div className="section__inner consult-band__inner">
      <p className="consult-band__eyebrow">Next step</p>
      <h2 id="consult-heading">Ready for a Clear Recommendation?</h2>
      <p className="consult-band__lead">
        Free initial consultation. No obligation. We reply within 1–2 business
        days.
      </p>
      <p className="consult-band__phone">
        Or call{" "}
        <a href={`tel:${business.phone.replace(/\D/g, "")}`}>{business.phone}</a>
      </p>
      <div className="consult-band__actions">
        <button
          type="button"
          className="btn btn--primary"
          onClick={onConsultClick}
        >
          Request a Free Consultation
        </button>
        <Link to="/contact" className="btn btn--navy">
          Contact Us
        </Link>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section
    id="clients"
    className="section testimonials-section"
    aria-labelledby="clients-heading"
  >
    <div className="section__inner">
      <p className="section__eyebrow section__eyebrow--on-dark">Client results</p>
      <h2 id="clients-heading" className="section__title">
        What Clients Say.
      </h2>
      <TestimonialsCarousel items={testimonials} />
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p>
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
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

const LandingPage = () => {
  const contactFormRef = useRef(null);
  const navigate = useNavigate();

  const openConsultation = () => {
    contactFormRef.current?.open();
  };

  useEffect(() => {
    handleInitialHash({
      contact: () => navigate("/contact", { replace: true }),
      packages: () => navigate("/packages", { replace: true }),
      about: () => navigate("/about", { replace: true }),
      faq: () => navigate("/faq", { replace: true }),
    });
  }, [navigate]);

  useEffect(() => {
    applyPageSeo({ ...PAGE_SEO.home, path: "/" });
  }, []);

  const jsonLd = businessJsonLd({
    services,
    packages: websitePackages,
  });

  return (
    <div className="landing-page">
      <Nav
        businessName={business.shortName}
        onConsultClick={openConsultation}
      />
      <HeroSection onConsultClick={openConsultation} />
      <TrustSection />
      <ServicesSection />
      <ProcessSection />
      <PackagesSection />
      <TestimonialsSection />
      <CloseBand onConsultClick={openConsultation} />
      <Footer />
      <ContactModal ref={contactFormRef} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default LandingPage;
