import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { LogoMark } from "../brand/LogoMark";
import { scrollToTop, scrollToSection } from "../../utils/scroll";
import "../brand/brand.css";

const sectionLinks = [
  { sectionId: "services", label: "Services" },
  { sectionId: "clients", label: "Clients" },
];

export const Nav = ({ businessName, onConsultClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const onHome = location.pathname === "/";

  const closeMenu = () => setMenuOpen(false);

  const goHome = (event) => {
    if (onHome) {
      scrollToTop(event);
    }
    closeMenu();
  };

  const goSection = (sectionId, event) => {
    closeMenu();
    if (onHome) {
      scrollToSection(sectionId, event);
      return;
    }
    event.preventDefault();
    navigate(`/#${sectionId}`);
  };

  return (
    <nav className="site-nav" aria-label="Main navigation">
      <div className="site-nav__inner">
        <Link
          to="/"
          className="logo-nav"
          onClick={goHome}
          aria-label={`${businessName} — home`}
        >
          <LogoMark size={36} variant="light" className="logo-nav__mark" />
          <span>{businessName}</span>
        </Link>
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
          {sectionLinks.map((link) => (
            <li key={link.sectionId}>
              <Link
                to={`/#${link.sectionId}`}
                className="site-nav__link"
                onClick={(event) => goSection(link.sectionId, event)}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/packages"
              className={`site-nav__link${location.pathname === "/packages" ? " is-active" : ""}`}
              onClick={closeMenu}
            >
              Packages
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className={`site-nav__link${location.pathname === "/about" ? " is-active" : ""}`}
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className={`site-nav__link${location.pathname === "/faq" ? " is-active" : ""}`}
              onClick={closeMenu}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className={`site-nav__link${location.pathname === "/contact" ? " is-active" : ""}`}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </li>
          <li>
            <button
              type="button"
              className="site-nav__cta"
              onClick={() => {
                closeMenu();
                onConsultClick?.();
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
