import React from "react";
import { Header } from "../components/header/Header";
import { CompanyLogo } from "../components/companyLogo/CompanyLogo";
import NavigationBar from "../components/navigationBar/NavigationBar";
import { AddressLink } from "../components/address/Address";
import { Footer } from "../components/footer/Footer";
import { ContactSection } from "../components/contactUs/ContactUs";
import { ServiceCard } from "../components/serviceCard/ServiceCard";
import { PhotoCollage } from "../components/photoCollage/PhotoCollage";

const JessicaStory = () => {
  const outerContainer = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#fff',
    padding: '2rem'
  };

  const contentStyle = {
    width: '100%',
    maxWidth: '800px',
    textAlign: 'left',
    lineHeight: '1.8',
    padding: '2rem',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    fontFamily: '"Playfair Display", Georgia, serif',
    fontSize: '1.1rem', // Adjust font size for readability
  };

  const paragraphStyle = {
    marginBottom: '1rem'
  };

  return (
    <div style={outerContainer}>
      <div style={contentStyle}>
        <p style={paragraphStyle}>Hi,</p>

        <p style={paragraphStyle}>
          My name is Jessica. <b>ITO</b> is my dad's nickname when he worked for Edison for over 25 years to provide for my family. When I was 15 years old my dad was diagnosed with Alzheimer's. This really hits home for me because his disability insurance plan kept our family afloat. I chose a career in the insurance industry because through his actions, he taught me the importance of protecting myself and my future family.
        </p>

        <p style={paragraphStyle}>
          Although he no longer worked at the time, he was a wise man who had a plan in place. So even as the sole provider for our family was not working, we were able to still live comfortably and our basic needs were covered, as there was a constant flow of income coming in each month.
        </p>

        <p style={paragraphStyle}>
          When he passed away in 2015, he still took care of us because his life insurance paid off the mortgage and he left my mom with a plan in place that would take care of her financially for the rest of her life.
        </p>

        <p style={paragraphStyle}>
          To some, insurance (of any kind) may be overlooked, since by definition, it "provides a guarantee of compensation for specified loss, damage, illness, or death in return for payment of a premium." It's paying for something that we hope never happens. So because, at many times, it doesn't pay out and does not give instant gratification, it is looked at as an expense, rather than an investment. But it is almost never a regret for those who DO have it in place when unexpected life crises occur and it protects them financially.
        </p>

        <p style={paragraphStyle}>
          The <b>I</b> in ITO stands for <strong>Integrity</strong>. I fully believe that being honest and transparent with my clients is the best form of customer service. "Nobody cares how much you know until they know how much you care." – <em>Theodore Roosevelt</em>
        </p>

        <p style={paragraphStyle}>
          The <b>T</b> stands for <strong>Thorough</strong>. I strive to be thorough in the research process as if I was advising plan options for my own family member. I have over 10 clients who are also either my sibling, aunt, uncle, cousin, and grandma (before her recent passing). They trust me with their insurance needs and so I make a great effort to extend the same courtesy to all of my clients.
        </p>

        <p style={paragraphStyle}>
          The <b>O</b> stands for <strong>Outstanding</strong>. I try my best to always give 150% effort to every client or potential client. I truly believe the Golden Rule, "Treat others the way you want to be treated."
        </p>

        <p style={paragraphStyle}>
          Thank you for taking the time to read my story and the reason why I picked a career that I stand by. It definitely has been rewarding and I feel like I am truly making a difference, one household at a time. I hope one day I am able to help you pick a plan and get to hear your story.
        </p>

        <p style={paragraphStyle}>Sincerely,</p>
        <p><strong>Jessica Q Tcheng</strong><br/>Your Licensed Insurance Agent</p>
      </div>
    </div>
  );
};


export const MeetTheFounderPage = () => (
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
      <ServiceCard  headerTitle={"Meet the Founder"} image={"/jessica.webp"} imageSide={'left'}  title={"Jessica Q Tcheng, Founder/Licensed Agent"} description={'Jessica has been licensed since 2010.  With over 10 years of experience within the insurance industry, her clients have confidence in her knowledge & expertise.  She is able to relate to each client’s unique needs so feel free to reach out to her if you are looking for a full, comprehensive explanation of your options.'}/>
      <JessicaStory />
      <PhotoCollage images={["jessAndDad.webp", "jessDad.webp", "jessDad2.webp", "jessFamily.webp", "jessParents.webp"]}/>
      <ContactSection phoneNumber={'(949) 317-2220'} extension={'2'} email={'info@itoinsuranceagency.com'} fax={'(949) 301-9611'}/>
      <Footer />
    </div>
  );
  