
import React from "react";
import "./About.css";
import serviceImage from "./images/service .png";
import driverBannerImage from "./images/driver-banner.png";

function About() {

  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20know%20more%20about%20your%20services.`,
      "_blank"
    );
  };

  return (
    <main className="about-page">

      {/* =========================================
          ABOUT HERO
      ========================================= */}

      <section className="about-hero">

        <div className="about-hero-overlay"></div>

        <div className="about-hero-content">

          <p>
            ABOUT SONI DRIVER CENTER
          </p>

          <h1>
            Your Trusted Travel
            <br />
            Partner in Kolkata
          </h1>

          <div className="about-hero-line"></div>

          <span>
            Reliable Cars & Professional Drivers
          </span>

        </div>

      </section>


      {/* =========================================
          ABOUT INTRO
      ========================================= */}

      <section className="about-intro">

        <div className="about-intro-container">

          {/* LEFT IMAGE */}

          <div className="about-image-wrapper">

            <img
              src={serviceImage}
              alt="Soni Driver Center Car Rental"
              className="about-main-image"
            />

            <div className="about-experience-box">

              <strong>
                Trusted
              </strong>

              <span>
                Travel Service
              </span>

            </div>

          </div>


          {/* RIGHT CONTENT */}

          <div className="about-content">

            <p className="about-small-title">
              WHO WE ARE
            </p>

            <h2>
              Reliable Travel Solutions
              <br />
              You Can Trust
            </h2>

            <div className="about-title-line"></div>

            <p>
              <strong>Soni Driver Center</strong> is a professional
              car rental and driver-on-rent service based in
              Kolkata, West Bengal.
            </p>

            <p>
              We provide comfortable and well-maintained cars
              along with experienced, professional and reliable
              drivers for local and outstation travel.
            </p>

            <p>
              Whether you need a car for a family trip, airport
              pickup, railway station transfer, corporate travel,
              local travel or an outstation journey, we are here
              to make your travel safe, comfortable and convenient.
            </p>

            <button
              className="about-whatsapp-btn"
              onClick={openWhatsApp}
            >

              <svg
                viewBox="0 0 32 32"
                className="about-whatsapp-icon"
              >
                <path
                  fill="currentColor"
                  d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Z"
                />
              </svg>

              <span>
                Talk to Us on WhatsApp
              </span>

              <span className="about-btn-arrow">
                →
              </span>

            </button>

          </div>

        </div>

      </section>


      {/* =========================================
          OUR SERVICES
      ========================================= */}

      <section className="about-services">

        <div className="about-section-heading">

          <p>
            WHAT WE DO
          </p>

          <h2>
            Our Travel Services
          </h2>

          <div className="about-title-line center"></div>

        </div>


        <div className="about-service-grid">

          {/* CAR RENTAL */}

          <div className="about-service-card">

            <div className="about-service-icon">

              <svg viewBox="0 0 64 64">

                <path
                  d="M10 38L15 22C16 19 18 17 21 17H43C46 17 48 19 49 22L54 38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M8 38H56V48H8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                />

                <circle
                  cx="18"
                  cy="49"
                  r="4"
                  fill="currentColor"
                />

                <circle
                  cx="46"
                  cy="49"
                  r="4"
                  fill="currentColor"
                />

              </svg>

            </div>

            <h3>
              Car Rental
            </h3>

            <p>
              Comfortable 4 seater and 7 seater
              cars for local, airport, family,
              corporate and outstation travel.
            </p>

          </div>


          {/* DRIVER ON RENT */}

          <div className="about-service-card">

            <div className="about-service-icon">

              <svg viewBox="0 0 64 64">

                <circle
                  cx="23"
                  cy="21"
                  r="9"
                  fill="currentColor"
                />

                <circle
                  cx="43"
                  cy="21"
                  r="9"
                  fill="currentColor"
                />

                <path
                  d="M7 54C7 41 14 34 23 34C32 34 39 41 39 54"
                  fill="currentColor"
                />

                <path
                  d="M25 54C25 41 32 34 41 34C50 34 57 41 57 54"
                  fill="currentColor"
                />

              </svg>

            </div>

            <h3>
              Driver on Rent
            </h3>

            <p>
              Experienced and professional drivers
              available for local, outstation,
              personal, family and corporate needs.
            </p>

          </div>


          {/* OUTSTATION */}

          <div className="about-service-card">

            <div className="about-service-icon">

              <svg viewBox="0 0 64 64">

                <path
                  d="M8 47L20 35L31 43L47 24L56 31"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                <circle
                  cx="20"
                  cy="35"
                  r="4"
                  fill="currentColor"
                />

                <circle
                  cx="47"
                  cy="24"
                  r="4"
                  fill="currentColor"
                />

              </svg>

            </div>

            <h3>
              Local & Outstation
            </h3>

            <p>
              Travel comfortably across Kolkata
              and beyond with dependable cars
              and experienced drivers.
            </p>

          </div>

        </div>

      </section>


      {/* =========================================
          WHY CHOOSE US
      ========================================= */}

      <section className="about-why">

        <div className="about-why-container">

          <div className="about-why-content">

            <p className="about-small-title">
              WHY CHOOSE US
            </p>

            <h2>
              Travel With Confidence
            </h2>

            <div className="about-title-line"></div>

            <p>
              At Soni Driver Center, we believe that a good
              journey starts with a reliable vehicle and a
              professional driver.
            </p>

            <ul>

              <li>
                <span>✓</span>
                Experienced & Professional Drivers
              </li>

              <li>
                <span>✓</span>
                Well-Maintained & Comfortable Cars
              </li>

              <li>
                <span>✓</span>
                Local & Outstation Travel
              </li>

              <li>
                <span>✓</span>
                Family & Corporate Travel Support
              </li>

              <li>
                <span>✓</span>
                Easy Booking Through WhatsApp
              </li>

            </ul>

          </div>


          <div className="about-why-image">

            <img
              src={driverBannerImage}
              alt="Professional Driver"
            />

          </div>

        </div>

      </section>


      {/* =========================================
          MISSION
      ========================================= */}

      <section className="about-mission">

        <div className="about-mission-container">

          <p>
            OUR COMMITMENT
          </p>

          <h2>
            Making Every Journey
            <br />
            Safe & Comfortable
          </h2>

          <div className="about-title-line center"></div>

          <p className="mission-text">
            Our goal is simple — to provide dependable
            transportation, professional drivers and
            comfortable vehicles so you can travel with
            complete peace of mind.
          </p>

        </div>

      </section>


      {/* =========================================
          FINAL CTA
      ========================================= */}

      <section className="about-cta">

        <div>

          <h2>
            Need a Car or Driver?
          </h2>

          <p>
            Contact Soni Driver Center today.
          </p>

        </div>

        <button
          onClick={openWhatsApp}
        >
          Chat on WhatsApp
          <span>→</span>
        </button>

      </section>

    </main>
  );
}

export default About;
