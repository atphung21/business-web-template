import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { AboutUsSection } from "../components/aboutUsSection/AboutUsSection";
import { LogoHero } from "../components/brand/LogoHero";
import { ContactFormFields } from "../components/contact/ContactFormFields";
import ContactModal from "../components/contact/ContactModal";
import "../components/contact/contact.css";
import { Header } from "../components/header/Header";
import { Nav } from "../components/nav/Nav";
import { PackageCard } from "../components/packageCard/PackageCard";
import { ServicesCarousel } from "../components/servicesCarousel/ServicesCarousel";
import { TestimonialsCarousel } from "../components/testimonials/TestimonialsCarousel";
import {
  about,
  business,
  faq,
  hero,
  processSteps,
  services,
  servicesIncludedNote,
  servicesLead,
  testimonials,
  trustPoints,
  websitePackages,
} from "../content/siteContent";
import { businessJsonLd, SEO_TITLE } from "../content/seo";
import { handleInitialHash, scrollToSection } from "../utils/scroll";

const HeroSection = ({ onConsultClick }) => (
  <section className="hero-section" aria-labelledby="hero-heading">
    <div className="hero-section__inner">
      <div className="hero-section__brand">
        <LogoHero name="ATP" descriptor="Consulting Services" />
      </div>
      <p className="hero-section__eyebrow">{business.tagline}</p>
      <h1 id="hero-heading" className="hero-section__headline">
        {hero.headline}
      </h1>
      <p className="hero-section__subheadline">{hero.subheadline}</p>
      <p className="hero-section__area">{business.serviceArea}</p>
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
      <p className="hero-section__note">{business.consultationNote}</p>
    </div>
  </section>
);

const TrustSection = () => (
  <section className="trust-section" aria-labelledby="trust-heading">
    <div className="section__inner">
      <p className="trust-section__eyebrow">Why work with us</p>
      <h2 id="trust-heading" className="trust-section__title">
        A practical partner for growing businesses
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
      <h2 className="section__title">Our Services</h2>
      <p className="section__lead">{servicesLead}</p>
      <ServicesCarousel services={services} />
      <p className="services-included-note">{servicesIncludedNote}</p>
    </div>
  </section>
);

const PackagesSection = () => (
  <section id="packages" className="section packages-section">
    <div className="section__inner">
      <h2 className="section__title">Website Packages</h2>
      <p className="section__lead">
        Every business is different. These tiers help you understand what type
        of site fits your goals — final pricing is customized after a free
        consultation.
      </p>
      <div className="packages-grid">
        {websitePackages.map((pkg) => (
          <PackageCard key={pkg.name} {...pkg} />
        ))}
      </div>
      <p className="packages-disclaimer">
        All packages include mobile-responsive design, secure hosting guidance,
        and launch support. Add SEO, marketing, or automation anytime.
      </p>
    </div>
  </section>
);

const ProcessSection = () => (
  <section id="process" className="section process-section">
    <div className="section__inner">
      <h2 className="section__title">How We Work</h2>
      <p className="section__lead">
        A straightforward process so you always know what happens next.
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

const DemoSection = () => (
  <section id="demo" className="section demo-section" aria-labelledby="demo-heading">
    <div className="section__inner section__inner--narrow">
      <h2 id="demo-heading" className="section__title">
        See Our Work
      </h2>
      <p className="section__lead">
        We build more than business sites — explore this interactive Blackjack demo
        with betting, split, insurance, and sound effects.
      </p>
      <Link to="/blackjack" className="demo-cta__card">
        <span className="demo-cta__eyebrow">Custom demo</span>
        <span className="demo-cta__title">Interactive Blackjack</span>
        <span className="demo-cta__text">
          A portfolio project showcasing custom development, polished UI, and
          game logic — the same quality we bring to client websites.
        </span>
        <span className="demo-cta__action">
          Try the demo
          <span className="demo-cta__arrow" aria-hidden="true">
            →
          </span>
        </span>
      </Link>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section
    className="section testimonials-section"
    aria-label="Client testimonials"
  >
    <div className="section__inner">
      <h2 className="section__title">What Clients Say</h2>
      <p className="section__lead">
        Real results from small businesses we have helped grow online.
      </p>
      <TestimonialsCarousel items={testimonials} />
    </div>
  </section>
);

const FaqSection = () => (
  <section id="faq" className="section faq-section">
    <div className="section__inner section__inner--narrow">
      <h2 className="section__title">Frequently Asked Questions</h2>
      <div className="faq-list">
        {faq.map((item) => (
          <details key={item.question} className="faq-item">
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section contact-section">
    <div className="section__inner">
      <h2 className="section__title">Contact Us</h2>
      <p className="section__lead">
        Ready to discuss a website, SEO, or marketing project? Send a message or
        reach us directly.
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
          <ContactFormFields formId="contact-inline-form" />
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer">
    <div className="site-footer__inner">
      <p>
        &copy; {new Date().getFullYear()} {business.name}. All rights reserved.
      </p>
      <p className="site-footer__tagline">{business.tagline}</p>
    </div>
  </footer>
);

const LandingPage = () => {
  const contactFormRef = useRef(null);

  const openConsultation = () => {
    contactFormRef.current?.open();
  };

  useEffect(() => {
    handleInitialHash();
  }, []);

  useEffect(() => {
    document.title = SEO_TITLE;
  }, []);

  const jsonLd = businessJsonLd({
    services,
    packages: websitePackages,
    faqs: faq,
  });

  return (
    <div className="landing-page">
      <Header />
      <Nav
        businessName={business.shortName}
        onConsultClick={openConsultation}
      />
      <HeroSection onConsultClick={openConsultation} />
      <TrustSection />
      <ServicesSection />
      <PackagesSection />
      <ProcessSection />
      <DemoSection />
      <AboutUsSection {...about} />
      <TestimonialsSection />
      <ContactSection />
      <FaqSection />
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
