import React from "react";
import "./Footer.css";

function Footer() {
  const whatsappNumber = "919831102673";

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${whatsappNumber}?text=Hello%20Soni%20Driver%20Center,%20I%20want%20to%20book%20a%20car%20or%20driver.`,
      "_blank"
    );
  };

  return (
    <>
      {/* CTA SECTION */}
      <section className="footer-cta">
        <div className="footer-cta-overlay"></div>

        <div className="footer-cta-container">
          <div className="footer-cta-content">
            <h2>Need a Car or Driver Today?</h2>

            <p>
              Get in touch with Soni Driver Center on WhatsApp and
              <br />
              we'll be happy to assist you.
            </p>
          </div>

          <button
            className="footer-whatsapp-btn"
            onClick={openWhatsApp}
          >
            <svg
              className="footer-whatsapp-icon"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill="currentColor"
                d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Zm0 24.1c-2.08 0-4.12-.55-5.9-1.6l-.42-.25-4.18 1.3 1.33-4.05-.27-.43a11.2 11.2 0 0 1-1.73-5.92C4.83 9.65 9.85 4.75 16 4.75s11.17 4.9 11.17 10.9S22.15 26.6 16 26.6Z"
              />
            </svg>

            <span>Chat on WhatsApp</span>

            <span className="footer-btn-arrow">→</span>
          </button>
        </div>
      </section>

      {/* MAIN FOOTER */}
      <footer className="main-footer">
        <div className="footer-container">

          {/* LOGO + ABOUT */}
          <div className="footer-column footer-brand">

            <div className="footer-logo">
              <div className="footer-logo-icon">
                <svg viewBox="0 0 100 100">
                  <circle
                    cx="50"
                    cy="50"
                    r="41"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="9"
                  />

                  <circle
                    cx="50"
                    cy="51"
                    r="11"
                    fill="currentColor"
                  />

                  <path
                    d="M50 40L50 19"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M41 56L25 69"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />

                  <path
                    d="M59 56L75 69"
                    stroke="currentColor"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              <div className="footer-logo-text">
                <strong>SONI</strong>
                <span>DRIVER CENTER</span>
              </div>
            </div>

            <p className="footer-about">
              Your trusted partner for car rental
              <br />
              and professional driver services
              <br />
              in Kolkata and beyond.
            </p>
          </div>


          {/* QUICK LINKS */}
          <div className="footer-column">
            <h3>Quick Links</h3>

            <ul className="footer-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>


          {/* SERVICES */}
          <div className="footer-column">
            <h3>Our Services</h3>

            <ul className="footer-links">
              <li><a href="#services">Car Rental (4 Seater)</a></li>
              <li><a href="#services">Car Rental (7 Seater)</a></li>
              <li><a href="#services">Driver on Rent</a></li>
              <li><a href="#services">Local & Outstation</a></li>
            </ul>
          </div>


          {/* CONTACT */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <div className="contact-item">
              <span className="contact-icon">●</span>
              <span>Kolkata, West Bengal</span>
            </div>

            <button
              className="footer-chat-link"
              onClick={openWhatsApp}
            >
              <span className="contact-icon">☎</span>
              <span>Chat on WhatsApp</span>
            </button>

            <div className="contact-item">
              <span className="contact-icon">✉</span>
              <span>info@sonidrivercenter.com</span>
            </div>

            <div className="contact-item">
              <span className="contact-icon">☎</span>
              <a href="tel:+919831102673">
                +91 98311 02673
              </a>
            </div>
          </div>

        </div>

        {/* BOTTOM FOOTER */}
        <div className="footer-bottom">
          <p>
            © {new Date().getFullYear()} Soni Driver Center.
            All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;