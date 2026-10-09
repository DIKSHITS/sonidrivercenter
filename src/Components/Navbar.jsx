import React, { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <a href="#home" className="navbar-logo">
          <div className="logo-icon">
            <svg
              viewBox="0 0 64 64"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="32"
                cy="32"
                r="27"
                fill="none"
                stroke="white"
                strokeWidth="5"
              />

              <circle
                cx="32"
                cy="32"
                r="5"
                fill="white"
              />

              <path
                d="M32 32V15"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M32 32L18 23"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />

              <path
                d="M32 32L46 23"
                stroke="white"
                strokeWidth="5"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <div className="logo-text">
            <span className="logo-name">SONI</span>
            <span className="logo-subtitle">DRIVER CENTER</span>
          </div>
        </a>

        {/* Navigation */}
        <nav className={menuOpen ? "nav-menu nav-menu-open" : "nav-menu"}>
          <a href="#home" className="nav-link active" onClick={closeMenu}>
            Home
          </a>

          <a href="#about" className="nav-link" onClick={closeMenu}>
            About Us
          </a>

          <a href="#services" className="nav-link" onClick={closeMenu}>
            Our Services
          </a>

          <a href="#drivers" className="nav-link" onClick={closeMenu}>
            Drivers
          </a>

          <a href="#contact" className="nav-link" onClick={closeMenu}>
            Contact
          </a>
        </nav>

        {/* WhatsApp Button */}
        <a
          href="https://wa.me/9831102673"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-btn"
        >
          <svg
            className="whatsapp-icon"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="white"
              d="M16 2.5C8.55 2.5 2.5 8.4 2.5 15.65c0 2.6.78 5.02 2.13 7.04L2.4 29.5l7.04-2.18a13.7 13.7 0 0 0 6.56 1.66c7.45 0 13.5-5.9 13.5-13.33C29.5 8.4 23.45 2.5 16 2.5Zm0 24.1c-2.08 0-4.12-.55-5.9-1.6l-.42-.25-4.18 1.3 1.33-4.05-.27-.43a11.2 11.2 0 0 1-1.73-5.92C4.83 9.65 9.85 4.75 16 4.75s11.17 4.9 11.17 10.9S22.15 26.6 16 26.6Zm6.12-8.15c-.33-.16-1.96-.96-2.26-1.07-.3-.11-.52-.16-.74.16-.22.33-.85 1.07-1.04 1.29-.19.22-.38.25-.7.08-.33-.16-1.39-.5-2.65-1.59-.98-.84-1.64-1.87-1.83-2.19-.19-.33-.02-.5.14-.66.15-.15.33-.38.49-.57.16-.19.22-.33.33-.55.11-.22.05-.41-.03-.57-.08-.16-.74-1.78-1.01-2.44-.27-.65-.54-.56-.74-.57h-.63c-.22 0-.57.08-.87.41-.3.33-1.14 1.11-1.14 2.71s1.17 3.14 1.33 3.36c.16.22 2.3 3.5 5.57 4.9.78.34 1.39.55 1.87.7.79.25 1.51.21 2.08.13.64-.1 1.96-.8 2.24-1.57.27-.77.27-1.43.19-1.57-.08-.14-.3-.22-.63-.38Z"
            />
          </svg>

          <span>WhatsApp Us</span>

          <span className="whatsapp-arrow">→</span>
        </a>

        {/* Mobile Menu Button */}
        <button
          className="mobile-menu-btn"
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
