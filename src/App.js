
import React from "react";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import DriverSection from "./Components/DriverSection";
import About from "./Components/About";
import WhyChooseUs from "./Components/WhyChooseUs";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="app">

      {/* ================================
          NAVBAR
      ================================= */}
      <Navbar />


      {/* ================================
          HOME / HERO
      ================================= */}
      <section id="home">
        <Hero />
      </section>


      {/* ================================
          SERVICES & VEHICLES
      ================================= */}
      <section id="services">
        <Services />
      </section>


      {/* ================================
          PROFESSIONAL DRIVERS
      ================================= */}
      <section id="drivers">
        <DriverSection />
      </section>


      {/* ================================
          ABOUT US
      ================================= */}
      <section id="about">
        <About />
      </section>


      {/* ================================
          WHY CHOOSE US + REVIEWS
      ================================= */}
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>


      {/* ================================
          CONTACT
      ================================= */}
      <section id="contact">
        <Contact />
      </section>


      {/* ================================
          FOOTER
      ================================= */}
      <Footer />

    </div>
  );
}

export default App;
