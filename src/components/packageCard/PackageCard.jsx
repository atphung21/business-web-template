import React from "react";

export const PackageCard = ({ name, bestFor, note, featured }) => {
  const [tier, focus] = name.split(" — ");

  return (
    <article className={featured ? "package-card is-featured" : "package-card"}>
      <header className="package-card__header">
        <p className="package-card__badge" aria-hidden={!featured}>
          {featured ? "Scoped to your needs" : ""}
        </p>
        <p className="package-card__tier">{tier || name}</p>
        <h3 className="package-card__title">{focus || name}</h3>
        <p className="package-card__audience">
          <span>Best for</span>
          {bestFor}
        </p>
      </header>
      <p className="package-card__note">{note}</p>
    </article>
  );
};
