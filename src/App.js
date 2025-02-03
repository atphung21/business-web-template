import React from "react";

const Header = () => (
  <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "16px", backgroundColor: "#1a202c", color: "white" }}>
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <h1 style={{ fontSize: "1.0rem", fontWeight: "bold" }}>ATP Software Consulting Services</h1>
    </div>
  </header>
);

const HeroSection = () => (
  <section style={{ textAlign: "center", padding: "80px 20px", backgroundColor: "#1a202c", color: "white" }}>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
    <img src="/logo.png" alt="Company Logo" style={{ width: "70%", 'border-radius': '80px' }} />
    <h1 style={{ fontSize: "2.5rem", fontWeight: "bold" }}>Empower Your Business with Expert Software Solutions</h1>
    <p style={{ fontSize: "1.2rem", marginTop: "10px" }}>Helping businesses grow with modern technology.</p>
    <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem", backgroundColor: "#4299e1", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }}>Get Started</button>
  </section>
);

const ServiceCard = ({ title, description }) => (
  <div style={{ boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)", padding: "20px", backgroundColor: "white", borderRadius: "8px", textAlign: "center", margin: "10px" }}>
    <h3 style={{ fontSize: "1.5rem", fontWeight: "bold" }}>{title}</h3>
    <p style={{ fontSize: "1rem", color: "#4a5568" }}>{description}</p>
  </div>
);

const ServicesSection = () => (
  <section style={{ padding: "50px 20px", backgroundColor: "#edf2f7", textAlign: "center" }}>
    <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Services</h2>
    <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", marginTop: "20px" }}>
      <ServiceCard title="Custom Software Development" description="Tailored solutions to fit your business needs." />
      <ServiceCard title="Cloud Consulting" description="Helping you migrate and optimize cloud solutions." />
      <ServiceCard title="Business Automation" description="Streamlining your workflows with technology." />
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
    <p style={{ fontSize: "1rem", fontWeight: "bold", color: "#4a5568" }}>Email: atphung@atpconsultingservices.com</p>
    <p style={{ fontSize: "1rem", color: "#4a5568", fontWeight: "bold" }}>Reach out to us for inquiries and consultations.</p>
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
