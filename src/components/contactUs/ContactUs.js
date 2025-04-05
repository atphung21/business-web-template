import React from "react";
import { AddressLink } from "../address/Address";

export const ContactSection = () => {
    // const handlePhoneClick = () => {
    //   if (window.confirm(`Do you want to call ${phoneNumber}?`)) {
    //     window.location.href = `tel:${phoneNumber}`;
    //   }
    // };
  
    return (
      <section
        style={{
          padding: "50px 20px",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "normal",
            fontFamily: '"Playfair Display", Georgia, serif',
          }}
        >
          Get Started Today!
        </h2>
        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }}>
          Phone: (949) 317-2220 ext. 2
        </p>
        <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }}>
          Fax: (949) 301-9611
        </p>
        <a
          style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }}
          href="mailto:info@itoinsuranceagency.com?subject=Services Information&body=Inquiry: , Contact Number: , Email: ,"
        >
          Email: info@itoinsuranceagency.com
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
          }}
        >
          <AddressLink
            addressLabel="Address:"
            address="12818 BROOKHURST STREET, GARDEN GROVE CA 92840"
            fontColor=""
            phoneNumber=""
          />
        </p>
        <br></br>
        <br></br>
        <p
          style={{
            fontSize: "12px",
            fontWeight: "normal",
            color: "rgb(89, 89, 89)",
            fontFamily: '"Playfair Display", Georgia, serif',
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