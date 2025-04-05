import React from "react";
import { Header } from "../header/Header";
import { AboutUsSection } from "../aboutUsSection/AboutUsSection";
import { AddressLink } from "../address/Address";
import ContactSection from "../contactUs/ContactUs";
import { HeroSection } from "../heroSection/HeroSection";
import { ServicesSection } from "../servicesSection/ServicesSection";


const Footer = () => (
  <footer
    style={{
      backgroundColor: "rgb(90, 90, 90, 0.85)",
      color: "white",
      textAlign: "center",
      padding: "20px",
    }}
  >
    <p>
      &copy; Copyright {new Date().getFullYear()} I.T.O. Insurance Agency - All
      Rights Reserved.
    </p>
  </footer>
);

export const LandingPage = () => (
  <div>
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    ></meta>
    <Header
      headerTitle={
        <AddressLink
          fontColor={"white"}
          address="12818 BROOKHURST STREET, GARDEN GROVE CA 92840"
          phoneNumber={"(949) 317-2220 ext. 2"}
          addressLabel={"Visit Us At:"}
        />
      }
      phoneNumber={"(949) 317-2220 ext. 2"}
      fontColor={"white"}
    />
    <HeroSection />
    <ServicesSection />
    <AboutUsSection title="Testimonials" description="" />
    <ContactSection />
    <Footer />
  </div>
);
