import React from "react";
import { LogoMark } from "./LogoMark";
import { scrollToTop } from "../../utils/scroll";
import "./brand.css";

/**
 * Header lockup — F-pattern layout (mark left, name right) for faster brand scanning.
 * Mixed-case wordmark reads more premium than all-caps shouting.
 */
export const LogoHeader = ({ name = "ATP", descriptor = "Consulting Services" }) => (
  <button
    type="button"
    className="logo-header"
    onClick={scrollToTop}
    aria-label={`${name} ${descriptor} — scroll to top`}
  >
    <LogoMark size={52} variant="color" className="logo-header__mark" />
    <span className="logo-header__text">
      <span className="logo-header__name">{name}</span>
      <span className="logo-header__descriptor">{descriptor}</span>
    </span>
  </button>
);
