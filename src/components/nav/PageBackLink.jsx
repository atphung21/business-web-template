import React from "react";
import { Link } from "react-router-dom";

export const PageBackLink = () => (
  <div className="page-back-bar">
    <div className="page-back-bar__inner">
      <Link to="/" className="page-back">
        <span aria-hidden="true">←</span>
        Home
      </Link>
    </div>
  </div>
);
