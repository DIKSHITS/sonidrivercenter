
import React from "react";
import "./Hero.css";
import heroImage from "./images/driver-banner.png";

function Hero() {
  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20book%20a%20car%20or%20driver.`,
      "_blank"
    );
  };

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >

      {/* Dark overlay */}
      <div className="hero-overlay"></div>

      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <p className="hero-welcome">
            WELCOME TO
          </p>

          <h1 className="hero-title">
            Soni Driver Center
          </h1>

          <h2 className="hero-subtitle">
            Reliable Cars & Professional Drivers
            <br />
            in Kolkata
          </h2>

          <p className="hero-description">
            Book a comfortable car or hire an experienced
            <br />
            driver for your local and outstation travel needs.
          </p>

          {/* BUTTONS */}
          <div className="hero-buttons">

            <button
              className="hero-whatsapp-btn"
              onClick={openWhatsApp}
            >
              <svg
                className="hero-whatsapp-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Zm0 24.1c-2.08 0-4.12-.55-5.9-1.6l-.42-.25-4.18 1.3 1.33-4.05-.27-.43a11.2 11.2 0 0 1-1.73-5.92C4.83 9.65 9.85 4.75 16 4.75s11.17 4.9 11.17 10.9S22.15 26.6 16 26.6Zm6.12-8.15c-.33-.16-1.96-.96-2.26-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.7.08-.33-.16-1.39-.5-2.65-1.59-.98-.84-1.64-1.87-1.83-2.19-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22 2.3 3.5 5.57 4.9.78.34 1.39.55 1.87.7.79.25 1.51.21 2.08.13.64-.1 1.96-.8 2.24-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"
                />
              </svg>

              <span>
                Book on WhatsApp
              </span>

              <span className="hero-arrow">
                →
              </span>
            </button>

            <a
              href="#services"
              className="hero-services-btn"
            >
              <span>
                Explore Services
              </span>

              <span className="hero-arrow">
                →
              </span>
            </a>

          </div>

        </div>

        {/* BOTTOM FEATURES */}
        <div className="hero-features">

          {/* Feature 1 */}
          <div className="hero-feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 38L15 22C16 19 18 17 21 17H43C46 17 48 19 49 22L54 38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                />

                <path
                  d="M8 38H56V47H8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <circle
                  cx="18"
                  cy="47"
                  r="4"
                  fill="currentColor"
                />

                <circle
                  cx="46"
                  cy="47"
                  r="4"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div className="feature-text">
              <strong>
                Well Maintained
              </strong>

              <span>
                Vehicles
              </span>
            </div>

          </div>

          <div className="feature-divider"></div>

          {/* Feature 2 */}
          <div className="hero-feature">

            <div className="feature-icon">
              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 6L53 14V29C53 42 44 52 32 58C20 52 11 42 11 29V14L32 6Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />

                <path
                  d="M21 32L28 39L44 23"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div className="feature-text">
              <strong>
                Experienced
              </strong>

              <span>
                Drivers
              </span>
            </div>

          </div>

          <div className="feature-divider"></div>

          {/* Feature 3 */}
          <div className="hero-feature">

            <div className="feature-icon">

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32 58C32 58 51 38 51 23C51 12.5 42.5 4 32 4S13 12.5 13 23C13 38 32 58 32 58Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <circle
                  cx="32"
                  cy="23"
                  r="6"
                  fill="currentColor"
                />
              </svg>

            </div>

            <div className="feature-text">
              <strong>
                Local & Outstation
              </strong>

              <span>
                Services
              </span>
            </div>

          </div>

          <div className="feature-divider"></div>

          {/* Feature 4 */}
          <div className="hero-feature">

            <div className="feature-icon">

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle
                  cx="32"
                  cy="17"
                  r="8"
                  fill="currentColor"
                />

                <circle
                  cx="14"
                  cy="25"
                  r="6"
                  fill="currentColor"
                />

                <circle
                  cx="50"
                  cy="25"
                  r="6"
                  fill="currentColor"
                />

                <path
                  d="M18 55C18 43 24 36 32 36C40 36 46 43 46 55"
                  fill="currentColor"
                />

                <path
                  d="M2 55C2 45 7 39 14 39C18 39 21 41 24 45"
                  fill="currentColor"
                />

                <path
                  d="M62 55C62 45 57 39 50 39C46 39 43 41 40 45"
                  fill="currentColor"
                />
              </svg>

            </div>

            <div className="feature-text">
              <strong>
                Safe & Comfortable
              </strong>

              <span>
                Journeys
              </span>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;
