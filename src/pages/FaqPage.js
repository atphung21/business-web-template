import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ServiceCard } from "../components/serviceCard/ServiceCard";

export const FaqPage = ({ title, description }) => (
  <div>
    <Header
      headerTitle={
        <AddressLink
          fontColor={"white"}
          address="12818 BROOKHURST STREET, GARDEN GROVE, CA 92840"
        />
      }
    //   phoneNumber={"(949) 317-2220"}
    //   extension={"2"}
      fontColor={"white"}
    />
    <CompanyLogo />
    <NavigationBar />
    <section
      style={{
        padding: "50px 20px",
        backgroundColor: "#edf2f7",
        textAlign: "center",
        letterSpacing: "3px",
      }}
    >
      <h2
        style={{
          fontSize: "3rem",
          fontWeight: "normal",
          fontFamily: '"Playfair Display", Georgia, serif',
        }}
      >
        {title}
      </h2>
      <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
      <ServiceCard
        title={"How do I get a quote?"}
        image={"/question.webp"}
        imageSide={"left"}
        description={
          <div>
            <p>
              To run a health insurance quote, the following information is
              needed:
            </p>
            <br></br>
            <p>1. Date Of Birth (of every member applying for coverage)</p>
            <p>2. Permanent Home Zip Code</p>
            <p>
              3. Projected Adjusted Gross Income for 2021 (if applying for
              premium assistance through Covered CA)
            </p>
            <br></br>
            <p>Email us at info@itoinsuranceagency.com</p>
            <br></br>
            <h2>What is Medicare vs. Medicaid?</h2>
            <br></br>
            <p>Medicare is health insurance coverage for those 65 and over (or those under 65 receiving SSDI.)  Medicaid (as known as Medi-Cal in CA) is for those who are considered low income by each states' individual qualifications.</p>
            <br></br>
            <h2>When can I enroll?</h2>
            <p>Every year during the <b>Annual Enrollment Period (AEP)</b> that runs:</p>
            <br></br>
            <p>1.  <b>Individual & Families (off-exchange)/Covered CA Plans(on-exchange)</b> - every year between November to January</p>
            <p>2.  <b>Medicare Advantage & Prescription Drug Plans</b> - every year between October 15th-December 7th</p>
            <p>3.  <b>Employer-Sponsored Plans</b> - dependent upon each individual employer</p>
            <p>4.  <b>Medicaid/Medi-Cal</b> - any time of the year</p>
            <p>5.  <b>Medicare Supplements</b> - any time of the year but must be approved based on past medical records/conditions</p>
            <br></br>
            <p><b>Special Enrollment Period (SEP)</b></p>
            <p>Under <b>Individual & Families (off-exchange)/Covered CA Plans(on-exchange)</b>, SEP is available the rest of the year by qualifying for a special life event, such as:</p>
            <li>Having a baby</li>
            <li>Getting married</li>
            <li>Getting divorced</li>
            <li>Moving from plan service area</li>
            <li>Losing employer coverage involuntarily</li>
            <li>Turning 26</li>
            <li>Etc.</li>
            <br></br>
            <p>Under <b>Medicare Advantage & Prescription Drug Plans</b>, SEP includes:</p>
            <br></br>
            <li>Turning 65 or qualifying for Medicare </li>
            <li>Qualifying for Prescription Extra Help, a Medicare Savings Program, or Medicaid/Medi-Cal</li>
            <li>Moving from plan service area</li>
            <li>Retiring from employer coverage</li>
            <li>Medicare Advantage Open Enrollment Period (OEP)- from January through March</li>
            <li>Eligible for Chronic Plan based on conditions such as diabetes, heart/lung disease, etc.</li>
            <br></br>
            <h2>Do I qualify?</h2>
            <p>Since the implementation of the Affordable Cares Act (ACA) there are no pre-existing conditions for the following:</p>
            <p>1. <b>Individual & Families/Covered CA Plans</b></p>
            <p>2. <b>Employer-Sponsored Plans</b></p>
            <p>3. <b>Medicaid/Medi-Cal</b></p>
            <p>Under Medicare, the following also do not have pre-existing conditions:</p>
            <p>1. <b>Medicare Advantages</b></p>
            <p>2. <b>Prescription Drug Plans</b></p>
            <p>Except during the Initial Enrollment Period for those newly eligible for Medicare, <b>Medicare Supplements/Medigap plans</b> applications do go under review and require approval based on the applicant's medical records and history.</p>
            <br></br>
            <h2>Is there still a penalty for not having health coverage?</h2>
            <p>At the federal level, the health insurance penalty no longer applies. But the state of California (alongside a couple of other states) chose to continue to implement the penalty to its state residents.</p>
            <p>"Starting in 2020, California residents must either:</p>
            <li>Have qualifying health insurance coverage, or</li>
            <li>Pay a penalty when filing a state tax return, or</li>
            <li>Get an exemption from the requirement to have coverage.</li>
            <p>The penalty for not having coverage the entire year will be at least $750 per adult and $375 per dependent child under 18 in the household when you file your 2020 state income tax return in 2021. A family of four that goes uninsured for the whole year would face a penalty of at least $2,250.</p>
            <p>The penalty will be applied by the California Franchise Tax Board. For information about the penalty, including the amount your family could owe for not having coverage, visit the Franchise Tax Board’s website and use their Penalty Estimator Tool."</p>
            <p>Click here for the original resource.</p>
            <br></br>
            <h2>What is excluded from coverage on a medical health insurance plan?</h2>
            <p>Other than for minors under 18, health insurance plans only cover medical services such as doctor/specialist visits, preventative services, x-rays, surgery, hospital, ambulance, etc.</p>
            <p>Dental, vision, acupuncture, chiropractic care, etc. are not covered benefits in most cases.  Additional stand-alone plans must be added to cover these benefits.</p>
          </div>
        }
      />
    </section>
    <ContactSection
      phoneNumber={"(949) 317-2220"}
      extension={"2"}
      email={"info@itoinsuranceagency.com"}
      fax={"(949) 301-9611"}
    />
    <Footer />
  </div>
);
