import React from 'react';

export const AboutUsSection = ({ description }) => (
    <section style={{ padding: "50px 20px", backgroundColor: "white", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About Us</h2>
      <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
    </section>
  );