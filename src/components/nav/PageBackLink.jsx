import React from "react";
import { Link, useNavigate } from "react-router-dom";

export const PageBackLink = () => {
  const navigate = useNavigate();

  const onBack = () => {
    const idx = window.history.state?.idx;
    if (typeof idx === "number" && idx > 0) {
      navigate(-1);
      return;
    }
    navigate("/");
  };

  return (
    <div className="page-back-bar">
      <div className="page-back-bar__inner">
        <button type="button" className="page-back" onClick={onBack}>
          <span aria-hidden="true">←</span>
          Back
        </button>
        <Link to="/" className="page-back">
          Home
        </Link>
      </div>
    </div>
  );
};
