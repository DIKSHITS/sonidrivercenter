
import React from "react";
import "./DriverSection.css";
import driverBannerImage from "./images/driver-banner.png";

function DriverSection() {

  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20hire%20a%20driver.`,
      "_blank"
    );
  };

  return (
    <>
      {/* =========================================
          PROFESSIONAL DRIVER SECTION
      ========================================= */}

      <section className="driver-section">

        <div className="driver-overlay"></div>

        <div className="driver-container">

          {/* LEFT CONTENT */}
          <div className="driver-content">

            <p className="driver-small-title">
              PROFESSIONAL DRIVERS
            </p>

            <h2>
              Hire a Trusted Driver
              <br />
              for Your Journey
            </h2>

            <p className="driver-description">
              Our drivers are experienced, well-behaved and
              <br />
              familiar with Kolkata and outstation routes.
              <br />
              Travel safely and comfortably with Soni Driver Center.
            </p>

            <button
              className="driver-whatsapp-btn"
              onClick={openWhatsApp}
            >

              <svg
                className="driver-whatsapp-icon"
                viewBox="0 0 32 32"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="currentColor"
                  d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Zm0 24.1c-2.08 0-4.12-.55-5.9-1.6l-.42-.25-4.18 1.3 1.33-4.05-.27-.43a11.2 11.2 0 0 1-1.73-5.92C4.83 9.65 9.85 4.75 16 4.75s11.17 4.9 11.17 10.9S22.15 26.6 16 26.6Z"
                />
              </svg>

              <span>
                Inquire Now on WhatsApp
              </span>

              <span className="driver-btn-arrow">
                →
              </span>

            </button>

          </div>


          {/* RIGHT DRIVER IMAGE */}

          <div className="driver-image-container">

            <img
              src={driverBannerImage}
              alt="Professional Driver"
              className="driver-image"
            />

          </div>

        </div>


        {/* =========================================
            DRIVER FEATURES
        ========================================= */}

        <div className="driver-features">

          <div className="driver-feature">

            <div className="driver-feature-icon">
              ✓
            </div>

            <span>
              Trained & Experienced
            </span>

          </div>


          <div className="driver-feature-divider"></div>


          <div className="driver-feature">

            <div className="driver-feature-icon">
              ✓
            </div>

            <span>
              Polite & Professional
            </span>

          </div>


          <div className="driver-feature-divider"></div>


          <div className="driver-feature">

            <div className="driver-feature-icon">
              ✓
            </div>

            <span>
              Knowledge of Local Routes
            </span>

          </div>


          <div className="driver-feature-divider"></div>


          <div className="driver-feature">

            <div className="driver-feature-icon">
              ✓
            </div>

            <span>
              Safe & Reliable
            </span>

          </div>

        </div>

      </section>


      {/* =========================================
          HOW IT WORKS
      ========================================= */}

      <section className="how-section">

        <div className="how-heading">

          <p className="how-small-title">
            HOW IT WORKS
          </p>

          <h2>
            Get Your Car or Driver in 3 Easy Steps
          </h2>

          <div className="how-line"></div>

        </div>


        <div className="steps-container">

          {/* STEP 01 */}

          <div className="step-item">

            <div className="step-top">

              <div className="step-number">
                01
              </div>

              <div className="step-icon">
                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="15"
                    width="44"
                    height="31"
                    rx="5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <path
                    d="M20 54H44"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M23 46V54"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <path
                    d="M41 46V54"
                    stroke="currentColor"
                    strokeWidth="5"
                  />
                </svg>
              </div>

            </div>

            <h3>
              Choose Service
            </h3>

            <p>
              Select Car Rental or
              <br />
              Driver on Rent.
            </p>

          </div>


          {/* ARROW */}

          <div className="step-arrow">
            ›
          </div>


          {/* STEP 02 */}

          <div className="step-item">

            <div className="step-top">

              <div className="step-number">
                02
              </div>

              <div className="step-icon">

                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Z"
                  />
                </svg>

              </div>

            </div>

            <h3>
              Send Your Requirement
            </h3>

            <p>
              Tell us your date, location
              <br />
              and travel details.
            </p>

          </div>


          {/* ARROW */}

          <div className="step-arrow">
            ›
          </div>


          {/* STEP 03 */}

          <div className="step-item">

            <div className="step-top">

              <div className="step-number">
                03
              </div>

              <div className="step-icon">

                <svg
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="10"
                    y="13"
                    width="44"
                    height="43"
                    rx="4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <path
                    d="M20 7V19"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M44 7V19"
                    stroke="currentColor"
                    strokeWidth="5"
                    strokeLinecap="round"
                  />

                  <path
                    d="M10 26H54"
                    stroke="currentColor"
                    strokeWidth="5"
                  />

                  <circle
                    cx="23"
                    cy="37"
                    r="3"
                    fill="currentColor"
                  />

                  <circle
                    cx="41"
                    cy="37"
                    r="3"
                    fill="currentColor"
                  />

                  <circle
                    cx="23"
                    cy="47"
                    r="3"
                    fill="currentColor"
                  />

                  <circle
                    cx="41"
                    cy="47"
                    r="3"
                    fill="currentColor"
                  />

                </svg>

              </div>

            </div>

            <h3>
              Get Confirmation
            </h3>

            <p>
              We'll contact you on WhatsApp
              <br />
              and confirm availability.
            </p>

          </div>

        </div>

      </section>
    </>
  );
}

export default DriverSection;
