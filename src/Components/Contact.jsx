
import React from "react";
import "./Contact.css";

function Contact() {
  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20make%20an%20enquiry.`,
      "_blank"
    );
  };

  const openMap = () => {
    window.open(
      "https://share.google/h4Gx1GYKpXNmqqTlf",
      "_blank"
    );
  };

  return (
    <section className="contact-page">

      {/* =========================================
          CONTACT HEADER
      ========================================= */}

      <div className="contact-heading">

        <p className="contact-small-title">
          GET IN TOUCH
        </p>

        <h1>
          Contact Soni Driver Center
        </h1>

        <div className="contact-yellow-line"></div>

        <p className="contact-heading-text">
          Have a question or need a car or driver?
          <br />
          We're here to help.
        </p>

      </div>


      {/* =========================================
          CONTACT CONTENT
      ========================================= */}

      <div className="contact-container">

        {/* =====================================
            LEFT - CONTACT INFORMATION
        ====================================== */}

        <div className="contact-info">

          <h2>
            Let's Talk
          </h2>

          <p className="contact-intro">
            Get in touch with Soni Driver Center for
            reliable car rental and professional driver
            services in Kolkata.
          </p>


          {/* ADDRESS */}

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <svg viewBox="0 0 64 64">
                <path
                  d="M32 58C32 58 51 38 51 23C51 12.5 42.5 4 32 4S13 12.5 13 23C13 38 32 58 32 58Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                />

                <circle
                  cx="32"
                  cy="23"
                  r="6"
                  fill="currentColor"
                />
              </svg>
            </div>

            <div>
              <h3>
                Our Address
              </h3>

              <p>
                DD-75 Narayantala East,
                <br />
                Aswini Nahar, Baguiati,
                <br />
                Kolkata, West Bengal
                <br />
                P.O: Aswini Nahar
                <br />
                P.S: Baguiati
                <br />
                District: North 24 Parganas
                <br />
                PIN: 700159
              </p>
            </div>

          </div>


          {/* PHONE */}

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <svg viewBox="0 0 64 64">
                <path
                  d="M18 8L27 6L34 20L27 25C30 32 35 37 42 40L47 33L60 40L58 49C57 54 52 57 48 56C26 51 12 37 8 16C7 12 12 9 18 8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3>
                Phone
              </h3>

              <a href="tel:+919831102673">
                +91 98311 02673
              </a>
            </div>

          </div>


          {/* EMAIL */}

          <div className="contact-info-item">

            <div className="contact-info-icon">
              <svg viewBox="0 0 64 64">
                <rect
                  x="7"
                  y="14"
                  width="50"
                  height="36"
                  rx="4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />

                <path
                  d="M9 18L32 36L55 18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <div>
              <h3>
                Email
              </h3>

              <a href="mailto:bksinghincometax8@gmail.com">
                bksinghincometax8@gmail.com
              </a>
            </div>

          </div>


          {/* WHATSAPP */}

          <button
            className="contact-whatsapp-btn"
            onClick={openWhatsApp}
          >

            <svg
              viewBox="0 0 32 32"
              className="contact-whatsapp-icon"
            >
              <path
                fill="currentColor"
                d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Z"
              />
            </svg>

            <span>
              Chat on WhatsApp
            </span>

            <span className="contact-btn-arrow">
              →
            </span>

          </button>

        </div>


        {/* =====================================
            RIGHT - MAP
        ====================================== */}

        <div className="contact-map-section">

          <div className="map-header">

            <h2>
              Find Us
            </h2>

            <p>
              Visit Soni Driver Center in Kolkata.
            </p>

          </div>


          <div className="map-box">

            <div className="map-placeholder">

              <div className="map-pin">
                <svg viewBox="0 0 64 64">
                  <path
                    d="M32 58C32 58 51 38 51 23C51 12.5 42.5 4 32 4S13 12.5 13 23C13 38 32 58 32 58Z"
                    fill="currentColor"
                  />

                  <circle
                    cx="32"
                    cy="23"
                    r="7"
                    fill="white"
                  />
                </svg>
              </div>

              <h3>
                Soni Driver Center
              </h3>

              <p>
                DD-75 Narayantala East,
                <br />
                Aswini Nahar, Baguiati,
                <br />
                Kolkata - 700159
              </p>

              <button
                className="map-button"
                onClick={openMap}
              >
                Open Location on Google Maps
                <span>→</span>
              </button>

            </div>

          </div>


          {/* ADDRESS SHORT */}

          <div className="map-address">

            <div className="map-address-icon">
              ✓
            </div>

            <div>
              <strong>
                Service Location
              </strong>

              <p>
                Kolkata, West Bengal - 700159
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =========================================
          BOTTOM CTA
      ========================================= */}

      <div className="contact-bottom">

        <div>
          <h2>
            Need a Car or Driver?
          </h2>

          <p>
            Contact us today for your travel requirements.
          </p>
        </div>

        <button
          onClick={openWhatsApp}
          className="contact-bottom-btn"
        >
          WhatsApp Us
          <span>→</span>
        </button>

      </div>

    </section>
  );
}

export default Contact;
