import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "../components/contact/contact.css";
import { ContactSection } from "../components/contact/ContactSection";
import ContactModal from "../components/contact/ContactModal";
import { Nav } from "../components/nav/Nav";
import { PageBackLink } from "../components/nav/PageBackLink";
import { business } from "../content/siteContent";
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

const ContactPage = () => {
  const consultRef = useRef(null);
  const seo = PAGE_SEO.contact;

  useEffect(() => {
    applyPageSeo({ ...seo, path: "/contact" });
    window.scrollTo(0, 0);
  }, [seo]);

  const jsonLd = businessJsonLd({
    path: "/contact",
    title: seo.title,
    description: seo.description,
  });

  return (
    <div className="landing-page contact-page">
      <Nav
        businessName={business.shortName}
        onConsultClick={() => consultRef.current?.open()}
      />
      <PageBackLink />
      <ContactSection headingLevel="h1" formId="contact-page-form" />
      <Footer />
      <ContactModal ref={consultRef} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
};

export default ContactPage;
