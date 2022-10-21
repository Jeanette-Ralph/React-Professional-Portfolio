import React from "react";
import * as Scroll from "react-scroll";

import Footer from "./components/Footer";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Project from "./components/Project";
import About from "./components/About";
import Skills from "./components/Skills";

import "./styles/index.css";

function App() {
  return (
    <div className="content">
      <div className="header-div">
        <Header />
        <Navigation />
      </div>

      <div id="about" className="about">
        <About />
      </div>
      <div className="body">
        <div id="portfolio">
          <Project />
        </div>
      </div>
      <div id="skills" className="skills-div">
        <Skills />
      </div>
      <div id="contact" className="footer-div">
        <Footer />
      </div>
    </div>
  );
}

export default App;
