import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow";

const CoveredCAInfo = () => {
    const containerStyle = {
      maxWidth: '100%',
      margin: '2rem auto',
      padding: '2rem',
      textAlign: 'left',
      lineHeight: '1.8',
      backgroundColor: '#fff',
      borderRadius: '8px',
      fontFamily: 'Georgia, serif',
      boxShadow: '0 0 20px rgba(0, 0, 0, 0.05)',
      fontSize: '1rem', // Adjust font size for readability
    };
  
    return (
      <div style={containerStyle}>
        <h2>Covered CA Plans</h2>
        <p>
          Covered CA, also known as "The Marketplace Exchange," is the middle man between the insurance companies and the member. Based on the adjusted gross income of tax household size, Covered CA may offer premium assistance to help pay a portion of the health insurance plan.
        </p>
  
        <h3>Individual & Family Plans (direct/off-exchange):</h3>
        <p>
          Those who do not qualify for Covered CA or would not like to receive any premium assistance would buy directly from the insurance companies, also known as "off-exchange." Members would be paying the full monthly premium of the health insurance plan.
        </p>
  
        <p>
          <strong>***Quotes are going to widely differ based on each individual's age, zip code, tax household size, adjusted gross income, and plan chosen.</strong> Feel free to reach out to us at <strong>949-394-7738</strong> for a custom quote.
        </p>
      </div>
    );
  };
  
export const IndividualAndFamilyPlansPage = () => (
    <div>
      <Header
        headerTitle={
          <AddressLink
            fontColor={"white"}
            address="12818 BROOKHURST STREET, GARDEN GROVE, CA 92840"
          />
        }
        fontColor={"white"}
      />
      <CompanyLogo />
      <NavigationBar />
      <ImageRow images={["/family.webp", "/baby.webp", "/otherFamily.webp"]}  header={"Individual & Family Plans"} description={(CoveredCAInfo())} />
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  );
  