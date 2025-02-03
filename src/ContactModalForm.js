import React, { useState } from "react";
import { useForm } from "react-hook-form";
import "./ContactModalForm.css";

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        reset();
        setIsOpen(false);
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Email sending error:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div>
      <button style={{ marginTop: "20px", padding: "10px 20px", fontSize: "1rem", backgroundColor: "#4299e1", color: "white", border: "none", borderRadius: "5px", cursor: "pointer" }} onClick={() => setIsOpen(true)} className="contact-button">
        Get Started
      </button>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-container">
            <h2 className="modal-title">Contact Us</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
              <div>
                <label className="form-label">Name: </label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="form-input"
                />
                {errors.name && <p className="error-message">{errors.name.message}</p>}
              </div>

              <div>
                <label className="form-label">Email: </label>
                <input
                  type="email"
                  {...register("email", { required: "Email is required", pattern: { value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/, message: "Invalid email" } })}
                  className="form-input"
                />
                {errors.email && <p className="error-message">{errors.email.message}</p>}
              </div>

              <div>
                <label className="form-label">Subject: </label>
                <input
                  type="text"
                  {...register("subject", { required: "Subject is required" })}
                  className="form-input"
                />
                {errors.subject && <p className="error-message">{errors.subject.message}</p>}
              </div>

              <div>
                <label className="form-label">Message: </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  className="form-textarea"
                  rows="4"
                ></textarea>
                {errors.message && <p className="error-message">{errors.message.message}</p>}
              </div>

              <div className="form-actions">
                <button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </button>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="close-button"
                >
                  Close
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
