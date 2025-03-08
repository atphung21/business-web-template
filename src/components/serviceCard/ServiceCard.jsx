import React from 'react';

export const ServiceCard = ({ title, description }) => (
    <div style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", padding: "20px", backgroundColor: "white", borderRadius: "8px", textAlign: "center", margin: "0.5rem", flexWrap: "wrap" }}>
      <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h3>
      <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
    </div>
  );