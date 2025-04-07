import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow";

const FinalExpenseInfo = () => {
    const containerStyle = {
      maxWidth: '100%',
      margin: '4rem auto',
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
        <p>
          Typically a final expense policy is purchased by someone who worries about the financial costs for burial expenses & remaining debt after their passing (up to $30,000.) They want peace of mind knowing that their loved ones will not be left with the burden of incurring their financial debts.
        </p>
        <p>
          Although the cost of insurance per $1,000 of coverage is higher with a final expense policy, it is considered an affordable monthly premium for those who have a fixed income and just want the basic minimum. Buying a full-on life insurance policy that covers $100,000 in death benefit, minimum, can potentially run a couple of hundred dollars per month.
        </p>
        <p>
          Final expense policies are generally permanent, whole life, insurance plans that cover until age 100 or age 120, depending on how it is set up.
        </p>
        <p>
          <strong>***Monthly premium may differ depending on age, pre-existing conditions, gender, amount of coverage, additional riders & plan chosen.</strong> Feel free to reach out to us at <strong>949-394-7738</strong> for a custom quote.
        </p>
      </div>
    );
  };
export const FinalExpensePlansPage = () => (
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
      <ImageRow images={["/umbrella.webp", "/piggyBank.webp", "/flowers.webp"]}  header={"Final Expense Plans"} description={(FinalExpenseInfo())} />
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  );
  