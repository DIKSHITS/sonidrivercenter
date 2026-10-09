
import React from "react";
import "./Services.css";
import carServiceImage from "./images/service .png";
import driverServiceImage from "./images/servicedriver.png";
import sedanImage from "./images/Sedan .png";
import suvImage from "./images/SUV.png";
import innovaImage from "./images/Innova.png";
import ertigaImage from "./images/Ertiga.png";

function Services() {

  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20make%20an%20enquiry.`,
      "_blank"
    );
  };

  return (
    <section className="services-section">

      {/* =================================
          SERVICES HEADER
      ================================= */}
      <div className="section-heading">

        <p className="section-small-title">
          OUR SERVICES
        </p>

        <h2>
          What We Offer
        </h2>

        <div className="heading-line"></div>

        <p className="section-description">
          Simple, reliable and professional transport solutions
          for your personal, family or corporate travel.
        </p>

      </div>


      {/* =================================
          SERVICES CARDS
      ================================= */}
      <div className="services-container">

        {/* CAR RENTAL */}
        <div className="service-card">

          <div className="service-image-wrapper">

            <img
              src={carServiceImage}
              alt="Car Rental"
              className="service-image"
            />

            <div className="service-icon">

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 38L15 22C16 19 18 17 21 17H43C46 17 48 19 49 22L54 38"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M8 38H56V47H8Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="5"
                />

                <circle
                  cx="18"
                  cy="48"
                  r="4"
                  fill="currentColor"
                />

                <circle
                  cx="46"
                  cy="48"
                  r="4"
                  fill="currentColor"
                />

              </svg>

            </div>

          </div>


          <div className="service-content">

            <div className="service-title-row">

              <h3>
                Car Rental
              </h3>

              <div className="service-arrow">
                →
              </div>

            </div>


            <ul className="service-list">

              <li>
                <span>✓</span>
                4 Seater Cars
              </li>

              <li>
                <span>✓</span>
                7 Seater Cars
              </li>

              <li>
                <span>✓</span>
                Local & Outstation
              </li>

              <li>
                <span>✓</span>
                Airport / Railway Station Pickup
              </li>

              <li>
                <span>✓</span>
                Family & Corporate Travel
              </li>

            </ul>


            <button
              className="service-whatsapp-btn"
              onClick={openWhatsApp}
            >

              <span className="service-whatsapp-icon">
                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Z"
                  />
                </svg>
              </span>

              <span>
                Inquire on WhatsApp
              </span>

              <span className="service-btn-arrow">
                →
              </span>

            </button>

          </div>

        </div>


        {/* DRIVER ON RENT */}
        <div className="service-card">

          <div className="service-image-wrapper">

            <img
              src={driverServiceImage}
              alt="Driver on Rent"
              className="service-image"
            />

            <div className="service-icon">

              <svg
                viewBox="0 0 64 64"
                xmlns="http://www.w3.org/2000/svg"
              >

                <circle
                  cx="23"
                  cy="22"
                  r="9"
                  fill="currentColor"
                />

                <circle
                  cx="43"
                  cy="22"
                  r="9"
                  fill="currentColor"
                />

                <path
                  d="M8 53C8 40 15 33 23 33C31 33 38 40 38 53"
                  fill="currentColor"
                />

                <path
                  d="M28 53C28 40 35 33 43 33C51 33 58 40 58 53"
                  fill="currentColor"
                />

              </svg>

            </div>

          </div>


          <div className="service-content">

            <div className="service-title-row">

              <h3>
                Driver on Rent
              </h3>

              <div className="service-arrow">
                →
              </div>

            </div>


            <ul className="service-list">

              <li>
                <span>✓</span>
                Experienced & Verified Drivers
              </li>

              <li>
                <span>✓</span>
                Local & Outstation Driving
              </li>

              <li>
                <span>✓</span>
                Personal / Family Drivers
              </li>

              <li>
                <span>✓</span>
                Corporate Drivers
              </li>

              <li>
                <span>✓</span>
                Full-Day / Trip-Based Service
              </li>

            </ul>


            <button
              className="service-whatsapp-btn"
              onClick={openWhatsApp}
            >

              <span className="service-whatsapp-icon">

                <svg
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="currentColor"
                    d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Z"
                  />
                </svg>

              </span>

              <span>
                Inquire on WhatsApp
              </span>

              <span className="service-btn-arrow">
                →
              </span>

            </button>

          </div>

        </div>

      </div>


      {/* =================================
          VEHICLES SECTION
      ================================= */}
      <div className="vehicles-section">

        <div className="section-heading vehicle-heading">

          <p className="section-small-title">
            OUR VEHICLES
          </p>

          <h2>
            Choose Your Ride
          </h2>

          <div className="heading-line"></div>

          <p className="section-description">
            Well-maintained 4 seater and 7 seater cars
            for all your travel needs.
          </p>

        </div>


        {/* VEHICLE CARDS */}
        <div className="vehicles-container">

          {/* Sedan */}
          <div className="vehicle-card">

            <div className="vehicle-image-wrapper">

              <img
                src={sedanImage}
                alt="Sedan 4 Seater"
              />

            </div>

            <h3>
              Sedan (4 Seater)
            </h3>

          </div>


          {/* SUV */}
          <div className="vehicle-card">

            <div className="vehicle-image-wrapper">

              <img
                src={suvImage}
                alt="SUV 7 Seater"
              />

            </div>

            <h3>
              SUV (7 Seater)
            </h3>

          </div>


          {/* Innova */}
          <div className="vehicle-card">

            <div className="vehicle-image-wrapper">

              <img
                src={innovaImage}
                alt="Innova 7 Seater"
              />

            </div>

            <h3>
              Innova (7 Seater)
            </h3>

          </div>


          {/* Ertiga */}
          <div className="vehicle-card">

            <div className="vehicle-image-wrapper">

              <img
                src={ertigaImage}
                alt="Ertiga 7 Seater"
              />

            </div>

            <h3>
              Ertiga (7 Seater)
            </h3>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Services;
