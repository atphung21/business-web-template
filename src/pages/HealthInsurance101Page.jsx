import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ImageRow } from "../components/imageRow/ImageRow";

const HealthInsuranceOverview = () => {
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
        Health insurance is coverage that helps pay for service/benefits, both
        preventative, as well as, for sickness or injury.
      </p>

      <h3>COMMON HEALTH INSURANCE TERMINOLOGY</h3>
      <ul style={listStyle}>
        <li>
          <strong>Premium:</strong> the monthly dollar amount paid to the
          insurance company to have a plan in force.
        </li>
        <li>
          <strong>Copayments:</strong> the fixed dollar amount paid for a
          service/benefit.
        </li>
        <li>
          <strong>Coinsurance:</strong> a percentage amount (of the approved
          rate) paid for a service/benefit.
        </li>
        <li>
          <strong>Deductible:</strong> the dollar amount that needs to be paid
          first, before an insurance plan will start paying. The deductible must
          be met for certain services before the member can pay the
          copayment/coinsurance.
        </li>
        <li>
          <strong>Out-Of-Pocket Max:</strong> the maximum dollar amount (total
          copays/coinsurance) a member would pay in a calendar year. This is the
          maximum risk that a member would have to pay, worst-case scenario.
        </li>
      </ul>

      <h3>HEALTH INSURANCE TYPES</h3>
      <h4>Health Maintenance Organizations (HMOs)</h4>
      <ul style={listStyle}>
        <li>
          HMOs use a Medical Groups (CA) or network (other states) to direct
          members on who and what is in-network. A Medical Group is a list of
          doctors, hospitals, testing facilities, and other health care
          providers that are contracted with the group. If a member uses a
          doctor or facility that isn’t in their Medical Group/network & without
          approval, they may have to pay the full cost of the services provided.
        </li>
        <li>
          HMO members usually have to assign a primary care doctor and must get
          a referral to see specialists within the Medical Group/network that
          was chosen. A member's assigned primary care doctor and Medical
          Group/network can be found on the member's ID card.
        </li>
        <li>
          Primary care doctors and Medical Groups can be changed once a month by
          requesting the insurance company.
        </li>
        <li>
          Insurance companies contract with Medical Groups/networks and are in
          charge of benefits that are covered. They also dictate the financial
          copay/coinsurance per service/benefit. If a plan requires choosing a
          Medical Group, the Medical Group is in charge of the specific
          locations/facilities/vendors members can go. Medical Groups are also
          in charge of approving/denying referrals, authorizations & services
          such as surgeries, physical therapy, medical equipment, etc.
        </li>
        <li>
          Examples of Medical Groups in LA & OC include Kaiser, St. Joseph's,
          Greater Newport Physicians, MemorialCare, Hoag, Mission Heritage, PIH,
          HealthCare LA, Prospect, ADOC, AMVI, UC Irvine Health, Caremore,
          Regal, Lakeside Community, Alamitos/FountainValley/Lakewood/St. Mary
          IPA, AppleCare, HealthCare Partners, & Monarch (merging under Optum),
          etc.
        </li>
      </ul>
      <h4>Exclusive Provider Organizations (EPOs)</h4>
      <ul style={listStyle}>
        <li>
          EPOs are a hybrid between HMOs and PPOs. EPOs allow its members to see
          any doctor/specialist that is in-network without assigning a primary
          care doctor or getting a referral (in most cases); limited to
          providers inside their networks. An EPO's network is a list of
          doctors, hospitals, testing facilities, and other health care
          providers that are contracted with the EPO plan. If a member uses a
          doctor or facility that isn’t in the EPO’s network, they may have to
          pay the full cost of the services provided.
        </li>
      </ul>

      <h4>Preferred Provider Organizations (PPOs)</h4>
      <ul style={listStyle}>
        <li>
          PPO plans have the biggest network with the most flexibility. These
          plans give you a choice of getting care within or outside of a plan's
          network. Members can go within the network for the standard
          copays/coinsurance. They can also go out-of-network but would pay a
          higher deductible, copay/coinsurance (usually 50%), and out-of-pocket
          max. On a PPO plan, members do not have to assign a primary care
          doctor and can self refer themselves to specialists.
        </li>
      </ul>

      <h4>Point-of-Service Plans (POS)</h4>
      <ul style={listStyle}>
        <li>
          POS plans are a hybrid between HMO and PPO. Members do have to choose
          and assign a primary care doctor. They have the capability to go
          out-of-network but in doing so, would pay higher
          copays/coinsurance/deductible/out-of-pocket max.
        </li>
      </ul>

      <h4>High Deductible Health Plan (HDHP)</h4>
      <ul style={listStyle}>
        <li>
          High Deductible Health Plans typically have lower plan premiums but
          higher deductibles than traditional insurance plans.{" "}
        </li>
        <li>
          On an HDHP, members can use a health savings account or a health
          reimbursement arrangement to pay for qualified out-of-pocket medical
          costs. Additionally, this can lower the amount of federal tax members
          may owe.
        </li>
      </ul>

      <h4>Catastrophic Health Insurance Plan</h4>
      <ul style={listStyle}>
        <li>
          A catastrophic health insurance plan covers essential health benefits
          but has a very high deductible. This means it provides a kind of
          “safety net” coverage in case members have emergencies like
          unpredicted accidents or serious illnesses with high medical costs.
        </li>
        <li>
          Catastrophic plans usually do not provide coverage for services like
          prescription drugs or shots.
        </li>
        <li>
          Premiums for catastrophic plans may be lower than traditional health
          insurance plans, but deductibles are usually much higher.
        </li>
      </ul>

      <h3>There are multiple types of Health Insurance Plans available:</h3>
      <ul style={listStyle}>
        <li>
          <strong>Short-Term:</strong> high-cost plans for short-term coverage
          under 12 months. Generally only purchased by those who do not have
          coverage and are outside of the Annual Enrollment Period. Some
          examples include those in between jobs, waiting for other coverage to
          begin, waiting to be eligible for Medicare coverage, etc. These plans
          cover services and treatments related to unexpected illness and
          injury, such as doctor visits, emergency room visits, hospital stays,
          surgeries, and related x-rays and lab services.
        </li>
        <li>
          <strong>
            Medicaid and the Children’s Health Insurance Program (CHIP):
          </strong>{" "}
          federal-state plans for those who are considered low-income by each
          state's eligibility.
        </li>
        <li>
          <strong>Medicare:</strong> federal health plan for those who are 65 or
          older, those with disabilities receiving SSDI, and those with
          end-stage renal disease.
        </li>
        <li>
          <strong>Students:</strong> students have the option of getting a
          school-sponsored health plan. They may lose coverage if they become a
          part-time student or transfer schools. Those who are under 26 also
          have the option to stay on their parent’s health plan till they come
          of age.
        </li>
        <li>
          <strong>COBRA:</strong> offered by employers for the continuation of
          health insurance coverage for up to 18 months after an employee leaves
          employment. Generally, these plans have high premiums.
        </li>
        <li>
          <strong>Covered CA Plans:</strong> also known as "The Marketplace
          Exchange," is the middle man between the insurance companies and the
          member. Based on the adjusted gross income of tax household size,
          Covered CA may offer premium assistance to help pay a portion of the
          health insurance plan.
        </li>
        <li>
          <strong>Individual & Family Plans (direct/off-exchange):</strong>{" "}
          Those who do not qualify for Covered CA or would not like to receive
          any premium assistance would buy directly from the insurance
          companies, also known as "off-exchange." Members would be paying the
          full monthly premium of the health insurance plan.
        </li>
      </ul>

      <p>
        Having the right coverage is very important in every family. It can
        literally be a life or death situation. We’ll make sure your family is
        properly covered with health insurance premiums you can afford.
      </p>
    </div>
  );
};

export const HealthInsurance101Page = () => (
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
      images={["/vitamins.webp", "/health.webp", "/medicalSupplies.webp"]}
      header={"Individual & Family Plans"}
      description={HealthInsuranceOverview()}
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
