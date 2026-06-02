import React from "react";

export const ServiceCard = ({ title, description, highlights = [] }) => (
  <article className="service-card">
    <h3 className="service-card__title">{title}</h3>
    <p className="service-card__description">{description}</p>
    {highlights.length > 0 && (
      <ul className="service-card__highlights">
        {highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </article>
);
