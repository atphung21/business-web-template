import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business, websitePackages } from "../content/siteContent";
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

const PackagesPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.packages;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/packages" });
    window.scrollTo(0, 0);
  }, [seo]);

  const jsonLd = businessJsonLd({
    path: "/packages",
    title: seo.title,
    description: seo.description,
    packages: websitePackages,
  });

  return (
    <div className="landing-page packages-page">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <PageBackLink />
      <section
        className="section packages-section packages-section--page"
        ref={sectionRef}
      >
        <div className="section__inner">
          <p className="section__eyebrow">Engagement options</p>
          <h1 className="section__title">Website Packages for Small Business</h1>
          <p className="section__lead">
            Four website engagement types — Starter, Growth, Catalog, and Custom —
            for contractors, salons, clinics, restaurants, retailers, and
            professional practices. Pricing is scoped after a free consultation.
            Domain, hosting, and SSL guidance are included at launch.
          </p>
          <div className="package-detail-list">
            {websitePackages.map((pkg) => {
              const [tier, focus] = pkg.name.split(" — ");
              return (
                <article
                  key={pkg.name}
                  className={pkg.featured ? "package-detail is-featured" : "package-detail"}
                >
                  <p className="package-card__tier">{tier}</p>
                  <h2 className="package-detail__title">{focus || pkg.name}</h2>
                  <p className="package-card__audience">
                    <span>Best for</span>
                    {pkg.bestFor}
                  </p>
                  <p className="package-detail__copy">{pkg.details}</p>
                  <ul className="package-card__features">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <p className="package-card__note">{pkg.note}</p>
                </article>
              );
            })}
          </div>
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

export default PackagesPage;
