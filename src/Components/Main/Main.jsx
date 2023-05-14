import React from "react";
import About from "../../Pages/About/About";
import Contact from "../../Pages/Contact/Contact";
import Hero from "../../Pages/Hero/Hero";
import Services from "../../Pages/Services/Services";
import Footer from "../Footer/Footer";
import "./Main.css";

const Main = () => {
  return (
    <div>
      <main className="site-main">
        <h1 className="visually-hidden">Prolive web site</h1>
        <Hero />
        <About />
        <Services />
        <Contact />
        <Footer />
      </main>
    </div>
  );
};

export default Main;
