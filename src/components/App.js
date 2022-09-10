import React from "react";
import Header from './Header.js'
import Hero from './Hero.js';
import About from './About.js';
import Skills from './Skills.js';
import Projects from './Projects.js';
import Contact from './Contact.js';
import Footer from './Footer.js';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
