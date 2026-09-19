import React from "react";

export const PackageCard = ({ name, bestFor, features, note, featured }) => {
  const [tier, focus] = name.split(" — ");

  return (
    <article className={featured ? "package-card is-featured" : "package-card"}>
      <header className="package-card__header">
        {featured ? (
          <p className="package-card__badge">Scoped to your needs</p>
        ) : null}
        <p className="package-card__tier">{tier || name}</p>
        {focus ? <h3 className="package-card__title">{focus}</h3> : null}
        <p className="package-card__audience">
          <span>Best for</span>
          {bestFor}
        </p>
      </header>
      <ul className="package-card__features">
        {features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>
      <p className="package-card__note">{note}</p>
    </article>
  );
};
