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
        <Link to="/services">Services</Link>
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
        {" · "}
        <a href={business.linkedin} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
      </p>
    </div>
  </footer>
);

const PACKAGE_ANCHORS = ["starter", "growth", "catalog", "custom"];

const PackagesPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.packages;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/packages" });
    window.scrollTo(0, 0);
  }, [seo]);

  useEffect(() => {
    const chapters = [...document.querySelectorAll(".package-chapter")];
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
    path: "/packages",
    title: seo.title,
    description: seo.description,
    packages: websitePackages,
  });

  return (
    <div className="landing-page packages-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="packages-offer__hero">
        <div className="packages-offer__hero-inner">
          <PageBackLink />
          <p className="packages-offer__kicker">Website packages</p>
          <h1>Choose the website package that fits how you sell.</h1>
          <p className="packages-offer__lead">
            Starter, Growth, Catalog, and Custom cover a first site, a local
            service business, a product or menu catalog, and a build with
            booking or integrations. ATP Consulting Services is based in
            Irvine, CA and works with small businesses nationwide. Pricing is
            scoped after a free consultation.
          </p>
          <div className="packages-offer__actions">
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
      <nav className="packages-offer__index" aria-label="Website packages on this page">
        <ol>
          {websitePackages.map((pkg, index) => {
            const [tier, focus] = pkg.name.split(" — ");
            return (
              <li key={pkg.name}>
                <a href={`#${PACKAGE_ANCHORS[index]}`}>
                  <span>{tier}</span>
                  <strong>{focus || pkg.name}</strong>
                  <em className={tier === "Growth" ? undefined : "is-spacer"} aria-hidden={tier === "Growth" ? undefined : true}>
                    Common fit
                  </em>
                </a>
              </li>
            );
          })}
        </ol>
      </nav>
      <div ref={sectionRef}>
        {websitePackages.map((pkg, index) => {
          const [tier, focus] = pkg.name.split(" — ");
          const tone = pkg.featured
            ? " package-chapter--featured"
            : index % 2
              ? " package-chapter--band"
              : "";
          return (
            <article
              key={pkg.name}
              id={PACKAGE_ANCHORS[index]}
              className={`package-chapter${tone}`}
            >
              <div className="package-chapter__inner">
                <p className="package-chapter__tier">{tier}</p>
                <div className="package-chapter__body">
                  <h2>
                    {focus || pkg.name}
                    <span className="package-chapter__rule" />
                  </h2>
                  <div className="package-chapter__copy">
                    <p className="package-chapter__fit">
                      <span>Best for</span>
                      {pkg.bestFor}
                    </p>
                    <p>{pkg.details}</p>
                    <p className="package-chapter__note">{pkg.note}</p>
                  </div>
                  <ul className="package-chapter__features">
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          );
        })}
      </div>
      <section className="packages-offer__close">
        <div className="packages-offer__close-inner">
          <p>
            Every website package includes domain, hosting, and SSL guidance at
            launch. You keep ownership of the domain and site. The investment
            is scoped after a free consultation, once we know which package
            fits.
          </p>
          <div className="packages-offer__actions">
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
