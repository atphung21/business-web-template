import React, { useState } from "react";

export const ContactUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const container = {
    maxWidth: "700px",
    margin: "0 auto",
    padding: "2rem",
    fontFamily: '"Open Sans", arial, sans-serif',
    textAlign: "center",
  };

  const section = {
    margin: "2rem 0",
  };

  const input = {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    fontSize: "16px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  };

  const textarea = {
    ...input,
    minHeight: "100px",
    resize: "vertical",
  };

  const button = {
    padding: "12px 24px",
    marginTop: "1rem",
    fontSize: "14px",
    backgroundColor: "#333",
    color: "white",
    border: "none",
    cursor: "pointer",
    letterSpacing: "1px",
  };

  const bookingBox = {
    border: "1px solid #ddd",
    padding: "1.5rem",
    margin: "1rem 0",
    display: "inline-block",
  };

  const recaptchaNote = {
    fontSize: "12px",
    marginTop: "2rem",
    color: "#888",
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:info@itoinsuranceagency.com?subject=Contact Form Submission&body=Name: ${formData.name}%0D%0APhone: ${formData.phone}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.location.href = mailto;
    setSubmitted(true);
  };

  return (
    <div style={container}>
      <h1
        style={{
          fontFamily: '"Playfair Display", Georgia, serif',
          fontWeight: "normal",
          letterSpacing: "2px",
          fontSize: "2.5rem",
        }}
      >
        Contact Us
      </h1>
      <br></br>
      <section style={section}>
        <h2 style={{ textAlign: "center" }}>Online Appointments</h2>
        <div style={bookingBox}>
          <h3>Inquiries/Quotes</h3>
          <p>30 mins | Free</p>
          <br></br>
          <a
            href="https://calendly.com/yourbookinglink"
            target="_blank"
            rel="noopener noreferrer"
            style={button}
          >
            BOOK
          </a>
        </div>
      </section>

      <section style={section}>
        <h2>Get in Touch!</h2>
        {submitted ? (
          <p>Thank you! Your message has been prepared in your email client.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              style={input}
              value={formData.name}
              onChange={handleChange}
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone*"
              style={input}
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Email*"
              style={input}
              required
              value={formData.email}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Tell us the type of consultation you need, and someone will be back to you soon."
              style={textarea}
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            <br />
            <button type="submit" style={button}>
              SEND MESSAGE
            </button>
          </form>
        )}
      </section>

      <p style={recaptchaNote}>
        This site is protected by reCAPTCHA and I.T.O. Privacy Policy and Terms
        of Service apply.
      </p>
    </div>
  );
};
