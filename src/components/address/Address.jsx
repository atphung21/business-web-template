import React from "react";


export const AddressLink = ({ address, addressLabel, fontColor }) => {
  const openMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div style={{alignItems: "center", alignContent: "center", justifyContent:'center'}}>
      <p style={{ color: fontColor, fontSize: "1.05rem", letterSpacing: '1px', fontFamily: '"Open Sans", arial, sans-serif' }}>
        {addressLabel ? addressLabel : ''} {"  "}
        <span
          style={{
            color: fontColor,
            cursor: "pointer",
            fontSize: "1.05rem",
            textDecorationThickness: "normal",
            fontFamily: '"Open Sans", arial, sans-serif',
            letterSpacing: '1px',
          }}
          onClick={openMaps}
        >
          {address}
        </span>
      </p>
    </div>
  );
};