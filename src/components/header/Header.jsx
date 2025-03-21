import React from "react";
export const Header = ({ headerTitle, phoneNumber, fontColor }) => {
  const handlePhoneClick = () => {
    if (window.confirm(`Do you want to call ${phoneNumber}?`)) {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "0.025rem",
        backgroundColor: "rgb(90, 90, 90)",
        maxWidth: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
          justifyContent: "center",
          maxWidth: "90%",
        }}
      >
        <h1
          style={{
            fontSize: "100%",
            fontWeight: "bold",
            "font-family": "Helvetica",
          }}
        >
          {headerTitle}
        </h1>
        <span
          style={{
            color: fontColor,
            cursor: "pointer",
            fontSize: "1rem",
            textDecorationThickness: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
          onClick={handlePhoneClick}
        >
          {" "} {phoneNumber}
        </span>
      </div>
    </header>
  );
};
