import React from "react";
import Hero from "./components/hero.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Certifications from "./components/Certifications.jsx";
import Footer from "./components/Footer.jsx";
import { ThemeProvider } from "./context/ThemeContext.jsx";
import  ScrollSpyNav  from "./components/ScrollSpyNav.jsx";
import "./assets/bg-stripes.css";
import AboutMe from "./components/aboutme.jsx";

const App = () => (
  <ThemeProvider>
    <main className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
       <ScrollSpyNav />
      <Hero />
      <AboutMe/>
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Footer />
    </main>
  </ThemeProvider>
);

export default App;
