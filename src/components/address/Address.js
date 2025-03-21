import React from "react";

export const AddressLink = ({ address, addressLabel, fontColor, phoneNumber }) => {
  const openMaps = () => {
    const encodedAddress = encodeURIComponent(address);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`,
      "_blank"
    );
  };

  return (
    <div style={{alignItems: "center", alignContent: "center", justifyContent:'center'}}>
      <p style={{ fontFamily: '"Playfair Display", Georgia, serif' }}>
        {addressLabel} {""}
        <span
          style={{
            color: fontColor,
            cursor: "pointer",
            fontSize: "1rem",
            textDecorationThickness: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
          onClick={openMaps}
        >
          {address} {' '}
        </span>
      </p>
    </div>
  );
};
