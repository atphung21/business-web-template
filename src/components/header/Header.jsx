import React from 'react';
export const Header = ({ headerTitle }) => (
    <header style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#edf2f7", color: "rgba(0, 0, 0, 0.7)" }}>
      <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
        <img src="/software_consulting_emblem.png" alt="Company Emblem" style={{ width: "3rem", 'border-radius': '1rem', justifyContent: "center" }} />  
        <h1 style={{ fontSize: "100%", fontWeight: "bold", "font-family": 'Helvetica' }}>{headerTitle}</h1>
      </div>
    </header>
  );