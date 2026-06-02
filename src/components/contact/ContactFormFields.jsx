import React from "react";
import { useForm } from "react-hook-form";
import { services, websitePackages, business } from "../../content/siteContent";

const serviceOptions = [
  "General inquiry",
  ...services.map((s) => s.title),
  ...websitePackages.map((p) => `Website: ${p.name}`),
];

const FORMSPREE_ENDPOINT = "https://formspree.io/f/xovjwrzj";

export const ContactFormFields = ({ formId = "contact-form", onSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
    setError,
  } = useForm({
    defaultValues: { serviceInterest: "General inquiry" },
  });

  const [status, setStatus] = React.useState(null);

  const onSubmit = async (data) => {
    setStatus(null);
    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...data,
          subject: `Consultation: ${data.serviceInterest}`,
        }),
      });

      if (response.ok) {
        setStatus("success");
        reset({ serviceInterest: "General inquiry" });
        onSuccess?.();
      } else {
        setStatus("error");
        setError("root", { message: "Something went wrong. Please try again." });
      }
    } catch (error) {
      console.error("Contact form error:", error);
      setStatus("error");
      setError("root", {
        message: "Unable to send right now. Email us directly or call.",
      });
    }
  };

  if (status === "success") {
    return (
      <div className="contact-form-status contact-form-status--success" role="status">
        <div className="contact-form-status__icon" aria-hidden="true">
          ✓
        </div>
        <h3 className="contact-form-status__title">Message sent</h3>
        <p className="contact-form-status__text">
          Thanks for reaching out. We typically respond within 1–2 business days.
        </p>
        <button
          type="button"
          className="contact-form__btn contact-form__btn--primary"
          onClick={() => setStatus(null)}
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      id={formId}
      onSubmit={handleSubmit(onSubmit)}
      className="contact-form"
      noValidate
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor={`${formId}-name`}>
            Full name <span className="contact-form__required">*</span>
          </label>
          <input
            id={`${formId}-name`}
            type="text"
            autoComplete="name"
            className={`contact-form__input ${errors.name ? "contact-form__input--error" : ""}`}
            {...register("name", { required: "Please enter your name." })}
          />
          {errors.name && (
            <p className="contact-form__error" role="alert">
              {errors.name.message}
            </p>
          )}
        </div>
        <div className="contact-form__field">
          <label className="contact-form__label" htmlFor={`${formId}-phone`}>
            Phone <span className="contact-form__required">*</span>
          </label>
          <input
            id={`${formId}-phone`}
            type="tel"
            autoComplete="tel"
            className={`contact-form__input ${errors.phone ? "contact-form__input--error" : ""}`}
            {...register("phone", { required: "Please enter your phone number." })}
          />
          {errors.phone && (
            <p className="contact-form__error" role="alert">
              {errors.phone.message}
            </p>
          )}
        </div>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={`${formId}-email`}>
          Email <span className="contact-form__required">*</span>
        </label>
        <input
          id={`${formId}-email`}
          type="email"
          autoComplete="email"
          className={`contact-form__input ${errors.email ? "contact-form__input--error" : ""}`}
          {...register("email", {
            required: "Please enter your email.",
            pattern: {
              value: /^[^@\s]+@[^@\s]+\.[^@\s]+$/,
              message: "Please enter a valid email address.",
            },
          })}
        />
        {errors.email && (
          <p className="contact-form__error" role="alert">
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={`${formId}-service`}>
          What can we help with? <span className="contact-form__required">*</span>
        </label>
        <select
          id={`${formId}-service`}
          className="contact-form__input contact-form__select"
          {...register("serviceInterest", { required: true })}
        >
          {serviceOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <label className="contact-form__label" htmlFor={`${formId}-message`}>
          Message <span className="contact-form__required">*</span>
        </label>
        <textarea
          id={`${formId}-message`}
          rows={4}
          className={`contact-form__input contact-form__textarea ${errors.message ? "contact-form__input--error" : ""}`}
          placeholder="Tell us about your business and what you're looking to achieve..."
          {...register("message", { required: "Please include a brief message." })}
        />
        {errors.message && (
          <p className="contact-form__error" role="alert">
            {errors.message.message}
          </p>
        )}
      </div>

      {errors.root && (
        <p className="contact-form__error contact-form__error--banner" role="alert">
          {errors.root.message}{" "}
          <a href={`mailto:${business.email}`}>{business.email}</a>
        </p>
      )}

      <button
        type="submit"
        className="contact-form__btn contact-form__btn--primary contact-form__btn--full"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Sending…" : "Send message"}
      </button>

      <p className="contact-form__privacy">
        {business.consultationNote}. Your information is only used to respond to
        your inquiry.
      </p>
    </form>
  );
};
