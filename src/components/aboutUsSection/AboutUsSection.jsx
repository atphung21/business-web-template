import React from "react";

export const AboutUsSection = ({ headline, paragraphs, founderNote }) => (
  <section id="about" className="section about-section">
    <div className="section__inner section__inner--narrow">
      <h2 className="section__title">{headline}</h2>
      {paragraphs.map((paragraph) => (
        <p key={paragraph.slice(0, 40)} className="about-section__text">
          {paragraph}
        </p>
      ))}
      {founderNote && (
        <p className="about-section__founder">{founderNote}</p>
      )}
    </div>
  </section>
);
