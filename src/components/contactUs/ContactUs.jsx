import React from "react";
import { AddressLink } from "../address/Address";
import { FaInstagram, FaYelp, FaFacebook, FaGoogle } from "react-icons/fa";

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
    padding: "1rem",
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
        style={{
          fontSize: "1.5rem",
          color: "blue",
          textDecoration: "none",
          padding: "1rem",
        }}
      >
        <FaFacebook />
      </a>
      <a
        href="https://www.google.com/search?sca_esv=34759c44dce1db94&rlz=1CDGOYI_enUS984US984&hl=en-US&sxsrf=AHTn8zpfjJxX8EHFWQ7VgZTZZS6vpfYqFw:1743994776504&q=i.t.o.+insurance+agency+reviews&uds=ABqPDvyf7Ngg8HkKxfeeJnzL3vDtQWcBpPH91rsekVqzbGO0ljXgNJzvioHR6XK8u1MaeNUUv3tvONrfA48bUgD8ziKXB2SoaqLuPoPYLFXly04yIslWMDdvsS_evhZBzJUOEh69D0EAyBKV9FDTAKRFrhtlo8bh8br2Oodcu0lFqcmjduwCBi4cZzVQbtF9TX6nh6uJMIPr8SIJ1zyAVaKv3U-bSFByiNbkx7fRvtnb1lYy-qycobod5bv6McQyvX3XdCVVfeVyYV3P-vXH9e9gfoWmV0drplVziFd3L6n1-RTbclcCZ306-2gLNJe0umAmEszF4g6zrK11Vp7zMp1UdJlvfnOGRctRJ1xA9t41N3wXPuPNQRfhEx-SkckZFFeX7aNw4ED769KGVkGngdYaPho1P_Ivxo-Or8kGx6ZVdZhFCkGutaMtiTEdavRhiREnsvLImkJm&si=APYL9bs7Hg2KMLB-4tSoTdxuOx8BdRvHbByC_AuVpNyh0x2KzS_Y32WjHIIJ73-SFesCh6kYhZ3vgAjmyzMoL60WB1-Fsv7I2_OfhQjxc0v5-5iSG9TPmytFNGWht3D1sYH-ftyecf-PU-pX2ILEWH4vmGpZCgib4g%3D%3D&sa=X&ved=2ahUKEwj-6pLp9sSMAxWaL0QIHWiDKWoQk8gLegQIHhAB&ictx=1&biw=390&bih=669&dpr=3&stq=1&cs=0&lei=Q0bzZ7TnBvLFur8PspW8oQY#ebo=2"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          fontSize: "1.5rem",
          color: "#F4B400",
          textDecoration: "none",
          padding: "1rem",
        }}
      >
        <FaGoogle />
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
