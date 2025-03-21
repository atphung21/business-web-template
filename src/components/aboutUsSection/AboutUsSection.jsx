import React from "react";
import { ServiceCard } from "../serviceCard/ServiceCard";

export const AboutUsSection = ({ title, description }) => (
  <section
    style={{
      padding: "50px 20px",
      backgroundColor: "#edf2f7",
      textAlign: "center",
      letterSpacing: "3px",
    }}
  >
    <h2
      style={{
        fontSize: "3rem",
        fontWeight: "normal",
        fontFamily: '"Playfair Display", Georgia, serif',
      }}
    >
      {title}
    </h2>
    <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr)",
        gap: "8px",
      }}
    >
      <ServiceCard
        title="Roxanne L. (Huntington Beach, CA)"
        description="'Jessica Has Been A Wonderful Medicare Specialist. I was Highly Recommended To her From My Children's Father.She Has Given me Great Help with My Medicare Plan. I Would Highly Recommend Her To Friends And Family. She will Always go out of her Way to help you out. I enjoy working with Her.'"
        image="/roxanne.webp"
        imageSide="left"
      />
      <ServiceCard
        title="Dr. Siamak Rouzroch, MD (Long Beach, CA)"
        description='"I have been working with Jessica over several years. She is very dedicated to her work and has helped many of my patients to choose the great insurance plans. I highly recommend her!"'
        image="/siamak.webp"
        imageSide="left"
      />
      <ServiceCard
        title="Lois K. (Phoenix, AZ)"
        description='"You can depend on receiving expert advice and honesty in their service. They will not let you down."'
        image="/lois.webp"
        imageSide="left"
      />
    </div>
  </section>
);
