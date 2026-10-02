import React from "react";

export const AboutUsSection = ({
  headline,
  paragraphs,
  founderNote,
  headingLevel = "h2",
  className = "",
}) => {
  const Heading = headingLevel === "h1" ? "h1" : "h2";

  return (
    <section
      id="about"
      className={`section about-section${className ? ` ${className}` : ""}`}
    >
      <div className="section__inner section__inner--narrow">
        <p className="section__eyebrow">The firm</p>
        <Heading className="section__title">{headline}</Heading>
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
};
