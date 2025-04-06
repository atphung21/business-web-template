import React from "react";
import { Header } from "../header/Header";
import { AboutUsSection } from "../aboutUsSection/AboutUsSection";
import { AddressLink } from "../address/Address";
import { ContactSection } from "../contactUs/ContactUs";
import { HeroSection } from "../heroSection/HeroSection";
import { ServicesSection } from "../servicesSection/ServicesSection";
import { Footer } from "../footer/Footer";

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
          address="12818 BROOKHURST STREET, GARDEN GROVE, CA 92840"
        />
      }
      phoneNumber={"(949) 317-2220"}
      extension={'2'}
      fontColor={"white"}
    />
    <HeroSection />
    <ServicesSection />
    <AboutUsSection title="Testimonials" description="" />
    <ContactSection contactHeader={'Get Started Today!'} phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
    <Footer />
  </div>
);
