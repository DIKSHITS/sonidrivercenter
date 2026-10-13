import React from "react";
import "./DriverSection.css";
import driverBannerImage from "./images/driver-banner.png";

const DriverSection = () => {
  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    const message =
      "Hello Soni Driver Center, I want to hire a driver.";

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const features = [
    "Trained & Experienced",
    "Polite & Professional",
    "Knowledge of Local Routes",
    "Safe & Reliable",
  ];

  const steps = [
    {
      number: "01",
      title: "Choose Your Service",
      description:
        "Select car rental or professional driver hire according to your needs.",
      icon: "car",
    },
    {
      number: "02",
      title: "Share Your Details",
      description:
        "Tell us your travel date, pickup location, destination, and requirements.",
      icon: "message",
    },
    {
      number: "03",
      title: "Get Confirmation",
      description:
        "Our team will discuss availability and confirm your travel arrangements.",
      icon: "calendar",
    },
  ];

  const renderStepIcon = (icon) => {
    if (icon === "car") {
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M12 35l5-15h30l5 15"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <rect
            x="7"
            y="31"
            width="50"
            height="19"
            rx="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
          />
          <circle cx="19" cy="49" r="5" fill="currentColor" />
          <circle cx="45" cy="49" r="5" fill="currentColor" />
          <path
            d="M14 39h8m20 0h8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    if (icon === "message") {
      return (
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path
            d="M10 12h44v32H31L17 54v-10h-7z"
            fill="none"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinejoin="round"
          />
          <path
            d="M20 24h24M20 33h17"
            stroke="currentColor"
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      );
    }

    return (
      <svg viewBox="0 0 64 64" aria-hidden="true">
        <rect
          x="10"
          y="14"
          width="44"
          height="42"
          rx="5"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          d="M21 8v12M43 8v12M10 27h44"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
        />
        <path
          d="m23 39 6 6 13-12"
          fill="none"
          stroke="currentColor"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  };

  return (
    <>
      {/* PROFESSIONAL DRIVER HERO */}
      <section className="driver-section" id="drivers">
        <div className="driver-overlay" aria-hidden="true" />

        <div className="driver-container">
          <div className="driver-content">
            <p className="driver-small-title">
              Professional Driver Services
            </p>

            <h2>
              Hire a Trusted Driver
              <span className="driver-title-highlight">
                for Your Journey
              </span>
            </h2>

            <p className="driver-description">
              Looking for a professional driver in Kolkata?
              Soni Driver Center helps you arrange driver services
              for local travel, outstation journeys, and your
              everyday transportation needs.
            </p>

            <div className="driver-trust-note">
              <span className="driver-trust-check" aria-hidden="true">
                ✓
              </span>
              <span>
                Convenient enquiries. Personal assistance.
              </span>
            </div>

            <button
              type="button"
              className="driver-whatsapp-btn"
              onClick={openWhatsApp}
              aria-label="Enquire about driver services on WhatsApp"
            >
              <svg
                className="driver-whatsapp-icon"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  fill="currentColor"
                  d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Zm0 24.1c-2.08 0-4.12-.55-5.9-1.6l-.42-.25-4.18 1.3 1.33-4.05-.27-.43a11.2 11.2 0 0 1-1.73-5.92C4.83 9.65 9.85 4.75 16 4.75s11.17 4.9 11.17 10.9S22.15 26.6 16 26.6Z"
                />
              </svg>

              <span>Enquire on WhatsApp</span>

              <span className="driver-btn-arrow" aria-hidden="true">
                →
              </span>
            </button>

            <p className="driver-response-note">
              Tell us your requirements to get started.
            </p>
          </div>

          <div className="driver-image-container">
            <div
              className="driver-image-glow"
              aria-hidden="true"
            />

            <img
              src={driverBannerImage}
              alt="Professional driver services from Soni Driver Center"
              className="driver-image"
              loading="lazy"
            />

            <div className="driver-image-caption">
              <span className="driver-caption-mark">S</span>
              <span>
                <strong>Soni Driver Center</strong>
                <small>Your journey, made convenient</small>
              </span>
            </div>
          </div>
        </div>

        {/* SERVICE HIGHLIGHTS */}
        <div className="driver-features">
          {features.map((feature) => (
            <div className="driver-feature" key={feature}>
              <span className="driver-feature-icon" aria-hidden="true">
                ✓
              </span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how-it-works">
        <div className="how-heading">
          <p className="how-small-title">HOW IT WORKS</p>

          <h2>Book Your Driver in 3 Simple Steps</h2>

          <p className="how-subtitle">
            Getting started is simple. Share your travel details
            and contact our team to discuss your requirements.
          </p>

          <div className="how-line" />
        </div>

        <div className="steps-container">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <article className="step-item">
                <div className="step-top">
                  <span className="step-number">
                    {step.number}
                  </span>

                  <span className="step-icon">
                    {renderStepIcon(step.icon)}
                  </span>
                </div>

                <h3>{step.title}</h3>

                <p>{step.description}</p>

                <span className="step-bottom-line" />
              </article>

              {index < steps.length - 1 && (
                <div className="step-arrow" aria-hidden="true">
                  →
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="how-bottom-cta">
          <div>
            <h3>Ready to plan your journey?</h3>
            <p>Contact us with your travel requirements.</p>
          </div>

          <button
            type="button"
            className="how-whatsapp-btn"
            onClick={openWhatsApp}
          >
            Contact Us
            <span aria-hidden="true">→</span>
          </button>
        </div>
      </section>
    </>
  );
};

export default DriverSection;