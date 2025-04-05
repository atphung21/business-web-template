import React from "react";

export const Footer = () => (
    <footer
      style={{
        backgroundColor: "rgb(90, 90, 90, 0.95)",
        color: "white",
        textAlign: "center",
        padding: "0.25rem",
      }}
    >
      <p>
        &copy; Copyright {new Date().getFullYear()} I.T.O. Insurance Agency - All
        Rights Reserved.
      </p>
    </footer>
  );