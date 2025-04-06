import React from "react";
import ContactForm from "../contactModalForm/ContactModalForm";
export const HeroSection = () => (
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
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          padding: "2rem",
          backgroundColor: "white",
          borderRadius: "10px",
          flex: "0 1 30vh",
          flexWrap: "wrap",
          width: "80%",
          margin: "1.5rem auto",
          boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.4)",
        }}
      >
        <div
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            backgroundColor: "rgb(90, 90, 90, 0.85)",
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
            maxWidth: "33vh",
            borderRadius: "5px",
          }}
        />
      </div>
    </section>
  );