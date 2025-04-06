import React from "react";
import { ServiceCard } from "../serviceCard/ServiceCard";

export const ServicesSection = () => (
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
          subDescription={
            <>
              <strong>CA Insurance Business Entity License:</strong>{" "}
              <span>#6004491</span>
            </>
          }
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