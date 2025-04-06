import React from "react";
import { AddressLink } from "../address/Address";
import { FaInstagram, FaYelp, FaFacebookF } from 'react-icons/fa';

export const ContactSection = ({
  contactHeader,
  phoneNumber,
  extension,
  fax,
  email,
}) => {
  const handlePhoneClick = () => {
    const formattedNumber = extension
      ? `${phoneNumber},${extension}` // `,` = short pause before extension
      : phoneNumber;

    if (
      window.confirm(
        `Do you want to call ${phoneNumber}${
          extension ? ` ext. ${extension}` : ""
        }?`
      )
    ) {
      window.location.href = `tel:${formattedNumber}`;
    }
  };

  const iconStyle = {
    fontSize: "1.5rem",
    color: "red",
    textDecoration: "none",
    padding: '1rem'
  };

  return (
    <section
      style={{
        padding: "0.5rem 0rem",
        backgroundColor: "white",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.75rem",
          fontWeight: "normal",
          fontFamily: '"Playfair Display", Georgia, serif',
          letterSpacing: "2px",
        }}
      >
        {contactHeader ? contactHeader : ""}
      </h2>
      <a
        href="https://www.instagram.com/i.t.o.insuranceagency/"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaInstagram />
      </a>
      <a
        href="https://www.yelp.com/biz/jessica-q-tcheng-ito-insurance-agency-garden-grove?osq=ito+insurance"
        target="_blank"
        rel="noopener noreferrer"
        style={iconStyle}
      >
        <FaYelp />
      </a>
      <a
        href="https://www.facebook.com/i.t.o.insuranceagency/"
        target="_blank"
        rel="noopener noreferrer"
        style={{    fontSize: "1.5rem",
        color: "blue",
        textDecoration: "none",
        padding: '1rem'}}
      >
        <FaFacebookF />
      </a>
      <p
        onClick={handlePhoneClick}
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "#4a5568",
          cursor: "pointer",
          letterSpacing: "1px",
        }}
      >
        {phoneNumber ? `Phone: ${phoneNumber}` : ""}{" "}
        {extension ? ` ext. ${extension}` : ""}
      </p>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "#4a5568",
          letterSpacing: "1px",
        }}
      >
        {fax ? `Fax: ${fax}` : ""}{" "}
      </p>
      <a
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "#4a5568",
          letterSpacing: "2px",
          textDecoration: "none",
          fontFamily: '"Open Sans", arial, sans-serif',
        }}
        href={
          "mailto:" +
          email +
          "?subject=Services Information&body=Inquiry: , Contact Number: , Email: ,"
        }
      >
        {email ? `Email: ${email}` : ""}{" "}
      </a>
      <br></br>
      <br></br>
      <br></br>
      <p
        style={{
          fontSize: "1rem",
          fontWeight: "normal",
          color: "rgb(89, 89, 89)",
          fontFamily: '"Open Sans", arial, sans-serif',
          letterSpacing: "1px",
          transform: "translateY(-70%)",
        }}
      >
        <AddressLink
          addressLabel="ADDRESS: "
          address="12818 BROOKHURST STREET, GARDEN GROVE, CA 92840"
          fontColor=""
          phoneNumber=""
        />
      </p>
      <br></br>
      <br></br>
      <p
        style={{
          fontSize: "0.8rem",
          fontWeight: "normal",
          color: "rgb(89, 89, 89)",
          fontFamily: '"Playfair Display", Georgia, serif',
          width: "50%",
          justifyContent: "center",
          letterSpacing: "1px",
          transform: "translateX(50%) translateY(-40%)",
        }}
      >
        WE DO NOT OFFER EVERY PLAN AVAILABLE IN YOUR AREA. ANY INFORMATION WE
        PROVIDE IS LIMITED TO THOSE PLANS WE DO OFFER IN YOUR AREA. PLEASE
        CONTACT MEDICARE.GOV OR 1-800-MEDICARE TO GET INFORMATION ON ALL OF YOUR
        OPTIONS.
      </p>
    </section>
  );
};
