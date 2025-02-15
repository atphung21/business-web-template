import React from "react";
import ContactForm from "./ContactModalForm";

const Header = () => (
  <header style={{ display: "flex", justifyContent: "center", alignItems: "center", padding: "16px", backgroundColor: "#edf2f7", color: "black" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", justifyContent: "center" }}>
      <img src="/software_consulting_emblem.png" alt="Company Emblem" style={{ width: "6%", 'border-radius': '1rem' }} />  
      <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", "font-family": 'Helvetica Neue' }}>ATP Software Consulting Services</h1>
    </div>
  </header>
);

const HeroSection = () => (
  <section style={{ textAlign: "center", padding: "80px 20px", backgroundColor: "#1a202c", color: "white" }}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <img src="/logo.png" alt="Company Logo" style={{ width: "65%", 'border-radius': '3rem' }} />
    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Empower Your Business with Expert Software Solutions</h1>
    <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Helping businesses grow with modern technology.</p>
    <ContactForm />
  </section>
);

const ServiceCard = ({ title, description }) => (
  <div style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", padding: "20px", backgroundColor: "white", borderRadius: "8px", textAlign: "center", margin: "0.5rem", flexWrap: "wrap" }}>
    <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h3>
    <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
  </div>
);

const ServicesSection = () => (
  <section style={{ padding: "1.5rem 1rem", backgroundColor: "#edf2f7", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Services</h2>
    <div style={{ display: "list-items", justifyContent: "center", flexWrap: "wrap", marginTop: "1rem", marginLeft: "5rem", marginRight: "5rem" }}>
      <ServiceCard title="Business Consultation" description="Provide expert guidance to help your businesses leverage technology for efficiency and growth."/> 
      <ServiceCard title="Website Creation & Enhancement" description="Tailored solutions to fit your business needs." />
      <ServiceCard title="SEO Optimization" description="Optimize your website to rank higher on search engines, improve visibility, and attract organic traffic."/>
      <ServiceCard title="Digital Marketing" description="Our digital marketing solutions include social media marketing, content creation, email campaigns, and paid advertising to increase brand awareness and customer engagement."/>
      <ServiceCard title="Domain Creation & Management" description="Assist businesses in securing the right domain names, setting up hosting, and managing domain-related technical aspects to ensure a seamless online presence."/>
      <ServiceCard title="Website Analytics & Performance Tracking" description="Implement advanced analytics tools to track website performance, user behavior, and conversion rates, providing actionable insights to improve marketing strategies."/>
      <ServiceCard title="Social Media Integration & Management" description="Help businesses connect and manage their social media platforms effectively, ensuring brand consistency, audience engagement, and cross-platform integration." />
      <ServiceCard title="Business Automation" description="Streamlining your workflows with technology."/>
    </div>
  </section>
);

const AboutSection = () => (
  <section style={{ padding: "50px 20px", backgroundColor: "white", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>About Us</h2>
    <p style={{ fontSize: "1rem", color: "#4a5568" }}>We are a team of experienced software consultants dedicated to helping businesses succeed.</p>
  </section>
);

const ContactSection = () => (
  <section style={{ padding: "50px 20px", backgroundColor: "#e2e8f0", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Contact Us</h2>
    <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }}>Phone: (714) 702-5483</p>
    <a style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }} href="mailto:info@atpconsultingservices.com?subject=Services Information&body=Inquiry: , Contact Number: , Email: ,">Email: info@atpconsultingservices.com</a>
    <p style={{ fontSize: "1rem", color: "#4a5568", fontWeight: "bold" }}>Reach out to us for inquiries and consultations.</p>
    <a style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }} href="https://www.blackjack.atpconsultingservices.com">
      <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "0.75rem", backgroundColor: "#4299e1", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>
      Try Our Fun Custom Retro Blackjack Game!
      </button>
    </a>
  </section>
);

const Footer = () => (
  <footer style={{ backgroundColor: "#1a202c", color: "white", textAlign: "center", padding: "20px" }}>
    <p>&copy; {new Date().getFullYear()} ATP Software Consulting Services Co. All rights reserved.</p>
  </footer>
);

const LandingPage = () => (
  <div>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <Header />
    <HeroSection />
    <ServicesSection />
    <AboutSection />
    <ContactSection />
    <Footer />
  </div>
);

export default LandingPage;
