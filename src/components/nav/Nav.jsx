import React, { useState } from "react";
import { LogoMark } from "../brand/LogoMark";
import { scrollToTop, scrollToSection } from "../../utils/scroll";
import "../brand/brand.css";

const navLinks = [
  { sectionId: "services", label: "Services" },
  { sectionId: "process", label: "Approach" },
  { sectionId: "packages", label: "Packages" },
  { sectionId: "clients", label: "Clients" },
  { sectionId: "about", label: "About" },
  { sectionId: "contact", label: "Contact" },
];

export const Nav = ({ businessName, onConsultClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = () => setMenuOpen(false);

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav__inner">
        <button
          type="button"
          className="logo-nav"
          onClick={(event) => {
            scrollToTop(event);
            handleNavClick();
          }}
          aria-label={`${businessName} — scroll to top`}
        >
          <LogoMark size={36} variant="light" className="logo-nav__mark" />
          <span>{businessName}</span>
        </button>
        <button
          type="button"
          className="site-nav__toggle"
          aria-expanded={menuOpen}
          aria-controls="main-nav-links"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className="sr-only">Toggle menu</span>
          <span aria-hidden="true">{menuOpen ? "✕" : "☰"}</span>
        </button>
        <ul
          id="main-nav-links"
          className={`site-nav__links ${menuOpen ? "site-nav__links--open" : ""}`}
        >
          {navLinks.map((link) => (
            <li key={link.sectionId}>
              <button
                type="button"
                className="site-nav__link"
                onClick={(event) => {
                  scrollToSection(link.sectionId, event);
                  handleNavClick();
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              type="button"
              className="site-nav__cta"
              onClick={() => {
                handleNavClick();
                onConsultClick();
              }}
            >
              Free Consultation
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
