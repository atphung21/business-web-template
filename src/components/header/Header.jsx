import React from "react";
export const Header = ({ headerTitle, phoneNumber, fontColor, extension }) => {
  const handlePhoneClick = () => {
    const formattedNumber = extension 
      ? `${phoneNumber},${extension}` // `,` = short pause before extension
      : phoneNumber;

    if (window.confirm(`Do you want to call ${phoneNumber}${extension ? ` ext. ${extension}` : ''}?`)) {
      window.location.href = `tel:${formattedNumber}`;
    }
  };

  return (
    <header
      style={{
        position: 'relative',
        textAlign: 'center',
        backgroundColor: "rgb(90, 90, 90, 0.95)",
        width: "100%",
        height: "100%"
      }}
    >
      <div
        style={{
          maxWidth: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <p1
          style={{
            fontSize: "1rem",
            fontWeight: "normal",
            fontFamily: "Helvetica",
          }}
        >
          {headerTitle ? headerTitle : ' '} {'  '}
        </p1>
        <span
          style={{
            color: fontColor,
            cursor: "pointer",
            fontSize: "1rem",
            textDecorationThickness: "normal",
            fontFamily: '"Open Sans", arial, sans-serif',
            position: 'absolute',
            transform: 'translateY(-50%)',
            top: '50%',
            right: '25px',
          }}
          onClick={handlePhoneClick}
        >
          {" "} {phoneNumber} {" "}  {extension ? `ext. ${extension}` : '' }
        </span>
      </div>
    </header>
  );
};
