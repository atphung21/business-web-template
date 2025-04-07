import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow";

const GroupInsuranceInfo = () => {
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
  
    const listStyle = {
      marginTop: '1rem',
      marginBottom: '1rem',
      paddingLeft: '1.5rem'
    };
  
    return (
      <div style={containerStyle}>
        <h2>What is an Employer-Sponsored Insurance Plan (Group Plan)?</h2>
        <p>
          Group Plans are purchased by an employer or association. The plan is issued in the company's name and Certificates of Coverage are issued to group members (employees).
        </p>
        <p>
          An employer must offer health insurance coverage if they have more than 50 W-2 employees. To be eligible for coverage:
        </p>
        <ul style={listStyle}>
          <li>The employee must be a “W-2” employee</li>
          <li>The employee must average 30 hours or more per week</li>
          <li>Typically 50% of eligible employees must opt-in to be covered on a health insurance plan</li>
          <li>The employer must pay at least 50% of the employees' premium but is not required to pay premiums for employees' dependents</li>
        </ul>
        <p>
          <strong>***Quotes are going to widely differ based on each employee's age, zip code, and plan chosen.</strong> Feel free to reach out to us at <strong>949-394-7738</strong> for a custom quote.
        </p>
        <p>
          For more information, <a href="https://www.coveredca.com/learning-center/employer-sponsored-coverage/employer-group-coverage/#:~:text=In%20fact%2C%20the%20Affordable%20Care,employers%20may%20offer%20insurance%20too">click here</a>.
        </p>
      </div>
    );
  };
export const EmployerSponsoredPlansPage = () => (
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
      <ImageRow images={["/employers.webp", "/meeting.webp", "/working.webp"]}  header={"Employer-Sponsored Plans"} description={(GroupInsuranceInfo())} />
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  );
  