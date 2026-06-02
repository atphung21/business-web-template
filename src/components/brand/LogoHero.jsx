import React from "react";
import { LogoMark } from "./LogoMark";
import "./brand.css";

/**
 * Hero lockup — same horizontal layout as header (mark left, wordmark right).
 */
export const LogoHero = ({
  name = "ATP",
  descriptor = "Consulting Services",
}) => (
  <div
    className="logo-hero logo-hero--row"
    role="img"
    aria-label={`${name} ${descriptor}`}
  >
    <div className="logo-hero__halo">
      <LogoMark size={72} variant="light" className="logo-hero__mark" />
    </div>
    <span className="logo-hero__text">
      <span className="logo-hero__name">{name}</span>
      <span className="logo-hero__descriptor">{descriptor}</span>
    </span>
  </div>
);
