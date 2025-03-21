import React from 'react';

export const AboutUsSection = ({ title, description }) => (
    <section style={{ padding: "50px 20px", backgroundColor: "white", textAlign: "center", letterSpacing: "3px", }}>
      <h2 style={{ fontSize: "3rem", fontWeight: "normal", fontFamily: '"Playfair Display", Georgia, serif', }}>{title}</h2>
      <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
    </section>
  );