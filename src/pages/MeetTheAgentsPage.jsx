import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ServiceCard } from "../components/serviceCard/ServiceCard";

export const MeetTheAgentsPage = () => (
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
    <ServiceCard
      headerTitle={"Meet the Agents"}
      image={"/jessica.webp"}
      imageSide={"left"}
      title={"Jessica Q Tcheng - Founder / Independent Licensed Agent"}
      description={
        "Jessica has been licensed since 2010.  With over 10 years of experience within the insurance industry, her clients have confidence in her knowledge & expertise. She is able to relate to each client’s unique needs so feel free to reach out to her if you are looking for a full, comprehensive explanation of your options."
      }
      subDescription={"Office: 949-317-2220 x 2"}
      subDescription2={"Cell: 949-394-7738"}
      subDescription3={(<a href= "mailto:jessica@itoinsuranceagency.com">jessica@itoinsuranceagency.com</a>)}
    />
    <ServiceCard
      image={"/nick.webp"}
      imageSide={"left"}
      title={"Naqebullah (Nick) Shah - Independent Licensed Agent"}
      description={
        "Nick has been licensed since 2009.  His focus is on on helping business owners take care of their employees' benefits, as well as, helping families save, protect and plan for their futures."
      }
      subDescription={"Office: 949-317-2220 x 3"}
      subDescription2={"Cell: 949-556-5260"}
      subDescription3={(<a href= "mailto:nickshahins@gmail.com">nickshahins@gmail.com</a>)}
    />
    <ServiceCard
      image={"/andrea.webp"}
      imageSide={"left"}
      title={"Andrea Escalona - Executive Assistant"}
      description={
        "Andrea plays a key role in our client's satisfaction, empowering them to understand their plan and navigating their coverage. Choosing an insurance plan can be overwhelming, so she helps clients by providing essential information and answering questions. She aims to deliver 7-star customer service by making a positive impression and ensuring each client feels informed and comfortable. Andrea collects important data to understand each client's needs, paving the way for Jessica to provide personalized solutions. Her goal is to create a smooth and efficient experience, setting the stage for successful client relationships."
      }
      subDescription={"Office: 949-317-2220 x 2"}
      subDescription2={"Cell: 949-317-2290"}
      subDescription3={(<a href= "mailto:andrea@itoinsuranceagency.com">andrea@itoinsuranceagency.com</a>)}
    />
    <ServiceCard
      image={"/driggs.webp"}
      imageSide={"left"}
      title={"Driggs Corales - Executive Assistant"}
      description={
        "Driggs plays a key role in client satisfaction. Insurance can be confusing, so he helps current clients assess their health care benefits and create a smooth transition. He aims to provide 7-star customer service by helping clients who call in, as well as, doing client outreach to make sure each client is happy and up-to-date with their plan. He helps clients understand their health plan benefits, help resolve their bills, find good-quality doctors in their area, book appointments, etc. His aim is to be our clients' personal assistant when it comes to their healthcare needs."
      }
      subDescription={"Office: 949-317-2220 x 2"}
      subDescription2={"Cell: 949-317-2290"}
      subDescription3={(<a href= "mailto:driggs@itoinsuranceagency.com">driggs@itoinsuranceagency.com</a>)}
    />
    <ServiceCard
      image={"/spark.webp"}
      imageSide={"left"}
      title={"Powered by Spark Advisor - Brokerage"}
      description={
        "Spark is our brokerage that allows us to offer insurance plan options from multiple different insurance companies.  This allows us to shop around for our clients, to help them pick a plan option that fits and caters to their individualized needs.  If we can't be reach, our clients have access to the Spark Navigator team, dedicated to provide a personal assistant level of care to all of our clients."
      }
      subDescription={"Office: 949-317-2220 x 1"}
      subDescription2={(<a href= "mailto:help@sparkadvisors.com">help@sparkadvisors.com</a>)}
    />
    <ContactSection
      phoneNumber={"(949) 317-2220"}
      extension={"2"}
      email={"info@itoinsuranceagency.com"}
      fax={"(949) 301-9611"}
    />
    <Footer />
  </div>
);
