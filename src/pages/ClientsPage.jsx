import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business, clientIndustries, clientWork } from "../content/siteContent";
import { applyPageSeo, businessJsonLd, PAGE_SEO, SITE_ORIGIN } from "../content/seo";
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

const CLIENT_NAV = [
  { id: "worked-with", label: "Businesses We Have Worked With" },
  { id: "industries", label: "Industries We Work With" },
];

const ClientsPage = () => {
  const consultRef = useRef(null);
  const sectionRef = useRef(null);
  const seo = PAGE_SEO.clients;
  useRevealOnScroll(sectionRef);

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/clients" });
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
    path: "/clients",
    title: seo.title,
    description: seo.description,
  });
  jsonLd["@graph"].push(
    {
      "@type": "BreadcrumbList",
      "@id": `${SITE_ORIGIN}/clients#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: `${SITE_ORIGIN}/`,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Clients",
          item: `${SITE_ORIGIN}/clients`,
        },
      ],
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_ORIGIN}/clients#businesses`,
      name: "Businesses We Have Worked With",
      itemListElement: clientWork.map((client, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: client.name,
        description: `${client.trade}. ${client.line}`,
      })),
    },
    {
      "@type": "ItemList",
      "@id": `${SITE_ORIGIN}/clients#industries`,
      name: "Industries We Work With",
      itemListElement: clientIndustries.map((industry, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: industry,
      })),
    }
  );

  return (
    <div className="landing-page about-offer clients-offer">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <header className="about-offer__hero clients-offer__hero">
        <div className="about-offer__hero-inner">
          <PageBackLink />
          <p className="about-offer__place">Irvine, California</p>
          <h1>Clients, and the trades we build for.</h1>
          <p className="about-offer__lead">
            Three businesses have trusted ATP Consulting Services with their sites.
            The same work fits owner-operated shops across the trades below.
          </p>
          <div className="about-offer__actions">
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
      <nav className="about-offer__index" aria-label="Client sections on this page">
        <ol>
          {CLIENT_NAV.map((item, index) => (
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
        <article id="worked-with" className="about-chapter">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              01
            </p>
            <div className="about-chapter__body">
              <h2>
                Businesses We Have Worked With
                <span className="about-chapter__rule" />
              </h2>
              <p>These are some of the clients we have worked with.</p>
              <ul className="about-chapter__steps">
                {clientWork.map((client) => (
                  <li key={client.name}>
                    <strong>
                      {client.name}
                      {" · "}
                      {client.trade}
                    </strong>
                    <span>{client.line}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>
        <article id="industries" className="about-chapter about-chapter--band">
          <div className="about-chapter__inner">
            <p className="about-chapter__num" aria-hidden="true">
              02
            </p>
            <div className="about-chapter__body">
              <h2>
                Industries We Work With
                <span className="about-chapter__rule" />
              </h2>
              <p>
                These are the kinds of businesses the sites are built for: local
                services, shops, and practices that need a clear page, a way to be
                found, and a way for a customer to call or write.
              </p>
              <ul className="about-chapter__clients">
                {clientIndustries.map((industry) => (
                  <li key={industry}>{industry}</li>
                ))}
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

export default ClientsPage;
