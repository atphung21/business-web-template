import React from "react";
export const CompanyLogo = () => (
  <section
    style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "white",
      color: "white",
      flex: "0 1 30vh",
      flexWrap: "wrap",
      alignItems: "center",
      margin: "0.5rem auto",
    }}
  >
    <a href="/">
      <img
        src="/jessica_ito.png"
        alt="Company Logo"
        href="/"
        style={{
          minWidth: "20rem",
          maxWidth: "100%",
        }}
      />
    </a>
  </section>
);
