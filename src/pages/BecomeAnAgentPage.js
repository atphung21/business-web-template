import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow"; // Ensure this component exists if you want to use it in the page

export const BecomeAnAgentPage = () => (
    <div>
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
      <CompanyLogo />
      <NavigationBar />
      <ImageRow images={["/office.webp", "/laptop.webp", "/hands.webp"]}  header={"Become An Agent"} description={'Start a rewarding career in the health industry.  Be your own boss, with flexible hours.  Contact us for more details.'} />
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  );
  