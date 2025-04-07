import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ContactUsForm } from "../components/contactUsForm/ContactUsForm";

export const ContactUsPage = () => {

   return ( <div>
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
      <ContactUsForm />
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  )};
  