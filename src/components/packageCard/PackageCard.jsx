import React from "react";

export const PackageCard = ({ name, bestFor, features, note }) => (
  <article className="package-card">
    <h3 className="package-card__title">{name}</h3>
    <p className="package-card__best-for">
      <strong>Best for:</strong> {bestFor}
    </p>
    <ul className="package-card__features">
      {features.map((feature) => (
        <li key={feature}>{feature}</li>
      ))}
    </ul>
    <p className="package-card__note">{note}</p>
  </article>
);
