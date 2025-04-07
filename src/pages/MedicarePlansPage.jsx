import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow";

const MedicareOverview = () => {
  const containerStyle = {
    maxWidth: "800px",
    margin: "2rem auto",
    padding: "2rem",
    textAlign: "left",
    lineHeight: "1.8",
    backgroundColor: "#fff",
    borderRadius: "8px",
    fontFamily: "Georgia, serif",
    boxShadow: "0 0 20px rgba(0, 0, 0, 0.05)",
    fontSize: "1rem", // Adjust font size for readability
  };

  const listStyle = {
    marginLeft: "1.5rem",
  };

  return (
    <div style={containerStyle}>
      <p>
        For many seniors, the two biggest concerns they have are retirement
        income and health insurance coverage; especially retirees on a fixed
        income. The older they get, the more they begin to use the benefits and
        services that their health plan provides.
      </p>

      <p>
        Original Medicare is an 80/20 plan. Medicare pays 80% whereas the
        Medicare beneficiary pays the deductible and the remaining 20%. This may
        become quite costly, especially when there is also no out-of-pocket max
        to safeguard them from the maximum financial risk in each calendar year,
        worst-case scenario.
      </p>

      <p>
        Fortunately, there are additional plan options available to help offset
        the portion that Original Medicare does not pay for.
      </p>

      <h3>What is Original Medicare?</h3>
      <p>Medicare is a federally funded health insurance program for:</p>
      <p>
        <b>a.</b> People age 65 or older
      </p>
      <ul style={listStyle}>
        <li>
          Or people with certain disabilities, receiving Social Security
          Disability Insurance (SSDI) for at least 24 months.
        </li>
        <li>Or people with End-Stage Renal Disease.</li>
      </ul>
      <p style={{ textIndent: "5rem" }}>And...</p>
      <p>
        <b>b.</b> People who have lived in the US for at least 5 consecutive
        years as legal residents or citizens.
      </p>
      <p style={{ textIndent: "5rem" }}>And...</p>
      <p>
        <b>c.</b> People (or their spouse) who have worked in the US, paying
        into Medicare and Social Security for at minimum, 40 quarters
        (equivalent to 10 years).
      </p>

      <h3>What does Original Medicare cover?</h3>
      <p>
        <b>Part A (Hospital Insurance)</b> - Generally $0/month for those who
        qualify.
      </p>
      <p>
        *Once deductible of about $1,400 (per benefit period) is met, Part A
        will pay 80%. Medicare Beneficiary is responsible for 20%. There is no
        out-of-pocket max.
      </p>
      <ul style={listStyle}>
        <li>Hospital stays</li>
        <li>Home health services (following an acute stay)</li>
        <li>Hospice care</li>
        <li>Skilled nursing care</li>
        <li>Transplants</li>
      </ul>

      <p>
        <b>Part B (Medical Insurance)</b> - Currently $148.50/month in 2021
      </p>
      <p>
        *Once deductible of about $200 (per calendar year) is met, Part B will
        pay 80%. Medicare Beneficiary is responsible for 20%. There is no
        out-of-pocket max.
      </p>
      <ul style={listStyle}>
        <li>Doctor/specialist visits</li>
        <li>Home health services (not following an acute stay)</li>
        <li>Ambulance services</li>
        <li>Outpatient physical, speech, and occupational therapy</li>
        <li>Outpatient surgeries</li>
        <li>Durable medical equipment</li>
        <li>X-rays & blood work</li>
        <li>Diagnostic testing</li>
        <li>MRI/CT scans</li>
        <li>Preventative Services</li>
      </ul>

      <h3>Plan Options to help cover what Original Medicare does not:</h3>
      <p>
        <strong>STEP 1:</strong> Apply for Medicare through Social Security
        Administration.
      </p>
      <p>
        <strong>STEP 2:</strong> Apply manually through Private Insurance
        Companies.
      </p>

      <h4>OPTION 1:</h4>
      <p>
        a. <b>Medicare Supplement (Medigap)</b>
      </p>
      <p>
        Private insurance plans that are secondary to Medicare and pay the
        deductible and 20% that Original Medicare does not cover. Medigap plans
        have a premium that ranges between $100-$400/month. This premium is in
        addition to the monthly Medicare Part B premium.
      </p>
      <p>
        Plans A, B, C, N, G, F, etc. are options available (don't be confused by
        Plan vs Part.)
      </p>
      <p>
        Most Medigap plans <strong>exclude</strong> long-term care, vision,
        dental care, hearing aids, eyeglasses, or private-duty nursing, etc.
      </p>
      <p style={{ textIndent: "5rem" }}>Plus...</p>

      <p>
        b. <b>Part D (Rx Drug Coverage)</b>
      </p>
      <p>
        <i>
          A stand-alone Prescription Drug Plan to help pay for medication costs
          in the form of co-pays. These plans vary between $7–$80/month. There
          are over 30 plans to choose from in LA/OC.
        </i>
      </p>
      <ul style={listStyle}>
        <li>
          Each plan offers its own formulary (list of covered medications)
        </li>
        <li>
          Co-pays vary based on brand vs. generic medications & drug Tiers 1–6
        </li>
      </ul>

      <h4>OPTION 2: Part C – Medicare Advantage HMO/PPO</h4>
      <p>Part A + Part B + Part D + additional benefits = Part C</p>
      <p>
        On Original Medicare, Medicare takes on 80% of the risk for every claim
        on a service/benefit. With Medicare Advantage plans, instead of Medicare
        taking on that risk, it is transferred to an insurance company. Medicare
        pays the insurance company chosen on a monthly basis and that insurance
        company is responsible to pay 100% of the member's claims. The insurance
        company that is chosen by the Medicare Beneficiary then takes the
        monthly funding that Medicare gives them and creates a variety of plan
        options to offer. There are over 50 plans to choose from in LA/OC and
        are generally $0/month. The plans are regulated by Medicare and have to
        cover, at the very least, everything that Medicare Part A + B covers but
        oftentimes, they use some of the funding to provide additional benefits
        that Medicare does not cover such as:
      </p>
      <ul style={listStyle}>
        <li>Prescription drug coverage</li>
        <li>Dental</li>
        <li>Vision allowance</li>
        <li>Hearing aid allowance</li>
        <li>Fitness program</li>
        <li>Acupuncture/Chiropractic care</li>
        <li>Over-the-Counter allowance</li>
        <li>Transportation</li>
        <li>Grocery allowance</li>
      </ul>
      <p>
        <em>
          (These plans are all offered through private insurance companies.)
        </em>
      </p>
      <br></br>
      <p>
        A <strong>Medigap/Supplement Plan</strong> is different from a{" "}
        <strong>Medicare Advantage Plan.</strong> Medicare Beneficiaries cannot
        have a <strong>Medigap/Supplement Plan</strong> simultaneously with a{" "}
        <strong>Medicare Advantage Plan.</strong>
      </p>

      <p>
        For additional information,{" "}
        <a style={{ color: "black" }} href="https://www.medicare.gov/">
          click here
        </a>
        .
      </p>
    </div>
  );
};

export const MedicarePlansPage = () => (
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
    <ImageRow
      images={[
        "/medicarePlans1.webp",
        "/medicarePlans2.webp",
        "/medicarePlans3.webp",
      ]}
      header={"Medicare Plans"}
      description={MedicareOverview()}
      fontSize="1rem"
      fontFamily="'Open Sans', arial, sans-serif"
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
