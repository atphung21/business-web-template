import React from "react";
import ContactForm from "./ContactModalForm";
import { Header } from "./components/header/Header";
import { ServiceCard } from "./components/serviceCard/ServiceCard";
import { AboutUsSection } from "./components/aboutUsSection/AboutUsSection";
import { AddressLink } from "./components/address/Address";

const HeroSection = () => (
  <section
    style={{
      textAlign: "center",
      padding: "20px",
      backgroundColor: "white",
      color: "white",
      flex: "0 1 30vh",
      flexWrap: "wrap",
      alignItems: "center",
      margin: "0.5rem auto",
    }}
  >
    <img
      src="/jessica_ito.png"
      alt="Company Logo"
      style={{
        minWidth: "20rem",
        maxWidth: "100%",
      }}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        padding: "2rem",
        backgroundColor: "#e2e8f0",
        borderRadius: "10px",
        flex: "0 1 30vh",
        flexWrap: "wrap",
        width: "80%",
        margin: "1.5rem auto",
        boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div
        style={{
          flexDirection: "column",
          justifyContent: "center",
          alignContent: "center",
          backgroundColor: "rgb(90, 90, 90)",
          padding: "3rem",
          minWidth: "10%",
          maxWidth: "20vh",
          borderRadius: "5px 5px 5px 5px",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "normal",
            fontFamily: "Playfair Display, Georgia, serif",
            letterSpacing: "1px",
            alignContent: "center",
          }}
        >
          <p
            style={{
              fontSize: "1.5rem",
              fontWeight: "normal",
              fontFamily: "Playfair Display, Georgia, serif",
              letterSpacing: "3px",
              alignContent: "center",
            }}
          >
            Welcome
          </p>
          Health Care Made Easy.
        </h1>
        <p
          style={{
            fontSize: "1em",
            fontWeight: "bold",
            fontFamily: '"Playfair Display", Georgia, serif',
            letterSpacing: "3px",
            alignContent: "center",
          }}
        >
          Expertise You Can Rely On.
          <ContactForm />
        </p>
      </div>
      <img
        src="/ito-doctor.webp"
        alt="Company Logo"
        style={{
          minWidth: "50%",
          maxWidth: "34vh",
          borderRadius: "5px",
        }}
      />
    </div>
  </section>
);

const ServicesSection = () => (
  <section
    style={{
      padding: "1rem 1rem",
      backgroundColor: "#edf2f7",
      textAlign: "center",
      maxWidth: "100%",
    }}
  >
    <h2
      style={{
        fontFamily: "Playfair Display, Georgia, serif",
        fontSize: "3rem",
        fontWeight: "normal",
        letterSpacing: "5px",
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      WELCOME
    </h2>
    <h3
      style={{
        fontFamily: '"Open Sans", arial, sans-serif',
        fontSize: "2rem",
        fontWeight: "normal",
        letterSpacing: "5px",
      }}
    >
      Over A Decade Of Experience
    </h3>
    <div
      style={{ fontSize: "3rem", fontFamily: '"Open Sans", arial, sans-serif' }}
    >
      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: "normal",
          color: "rgb(94, 94, 94)",
        }}
      >
        Confused by the world of health insurance? We are here to walk you
        through them, step by step.
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: "normal",
          color: "rgb(94, 94, 94)",
        }}
      >
        We help you filter through your plan options in a way that you can
        understand.
      </p>
      <p
        style={{
          fontSize: "1.1rem",
          fontWeight: "normal",
          color: "rgb(94, 94, 94)",
        }}
      >
        Our team brings together our experience & knowledge with your unique
        circumstance to craft a program that is specific to your wants, needs,
        health, and wallet.
      </p>
    </div>
    <br></br>
    <br></br>
    <h1
      style={{
        fontSize: "3rem",
        fontWeight: "normal",
        color: "rgb(94, 94, 94)",
        fontFamily: '"Playfair Display", Georgia, serif',
      }}
    >
      Why Choose us?
    </h1>
    <div
      style={{
        display: "list-items",
        justifyContent: "center",
        flexWrap: "wrap",
        marginTop: "1rem",
        marginLeft: "0.75rem",
        marginRight: "0.75rem",
      }}
    >
      <ServiceCard
        title="We are Licensed & Certified"
        description="We are licensed & certified in multiple states and are here to help. We concentrate on the following areas:"
        image="/licensed-certified.webp"
        imageSide="left"
        subDescription={<><strong>CA Insurance Business Entity License:</strong> <span>#6004491</span></>}
        bulletPoints={[
          "Medicare Plans",
          "Individual & Families Plans",
          "Covered CA Plans",
          "Employer-Sponsored Plans",
          "Final Expense Policies",
        ]}
      />
      <ServiceCard
        title="No-Cost Services"
        description=" Our time and effort is at no cost to our clients because we get compensated by the insurance companies.  Plan premiums and benefits do not change whether our clients purchase through insurance companies directly or with our help.  So, let us represent you!"
        image="/piggy-bank.webp"
      />
      <ServiceCard
        title="5-Star Customer Service"
        description="Our highest priority is to serve the community with world-class customer service."
        imageSide="left"
        image="/phone.webp"
      />
      <ServiceCard
        title="Lifetime Support"
        description="Have questions, concerns, or changes?  Our clients always have access to us.  Whether they have paperwork that they don't understand, need assistance selecting an in-network provider, compare costs and copays, or when they get a bill in the mail that they think is incorrect;  we are always happy to continue to serve our clients even after the policy is in force."
        image="/life-time-support.webp"
      />
      <ServiceCard
        title="Strength in Selection"
        description="Every client's doctors, prescriptions, needs, and preferences are different.  We understand that, so we work with the top-rated insurance companies in the industry so that they have a variety of choices to pick from. Check out the 'Companies We Work With' tab for a list of them."
        imageSide="left"
        image="/strength-in-selection.webp"
      />
      <ServiceCard
        title="We Represent You"
        description="We help our clients shop and compare their options.  We do not have an incentive to offer one company over another.  Our clients have peace of mind knowing that when we recommend a plan, it's in their best interest, not ours."
        image="/we-represent-you.webp"
      />
      <ServiceCard
        title="Education"
        description="Although we do the bulk of the heavy lifting to help our clients research & curate a plan choice that works for them, we also pride ourselves in educating our clients so that they make sound decisions based on understanding vs. just taking our word for it."
        imageSide="left"
        image="/education.webp"
      />
    </div>
  </section>
);

const ContactSection = () => {
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
      PROVIDE IS LIMITED TO THOSE PLANS WE DO OFFER IN YOUR AREA. PLEASE CONTACT
      MEDICARE.GOV OR 1-800-MEDICARE TO GET INFORMATION ON ALL OF YOUR OPTIONS.
    </p>
  </section>
)};

const Footer = () => (
  <footer
    style={{
      backgroundColor: "rgb(90, 90, 90)",
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

const LandingPage = () => (
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

export default LandingPage;
