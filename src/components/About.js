import React from "react";
import "./About.css";
import aboutImage from "../images/about.png";
/*import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faFacebook,
  faLinkedin
} from "@fortawesome/free-brands-svg-icons";*/

const About = () => {
  return (
    <section id="about">
      <h1 className="title"> About Me</h1>
      <div className="about-image">
        <img src={aboutImage} alt="profile picture" />
        <div className="about-social-icons">
          <a href="https://github.com/patgramo" target="_blank">
          </a>
          <a href="https://www.instagram.com/patgramo" target="_blank">
          </a>
          <a
            href="https://www.linkedin.com/in/patrickmorrison33"
            target="_blank"
          >
          </a>
          <a href="https://www.facebook.com/patgramo" target="_blank">
          </a>
        </div>
      </div>
      <div className="about-description">
        <p>
          I was a 6th grade science teacher for 6 years in NYC. Once COVID-19
          hit, my school went virtual for 1.5 years. It was a big transition
          that was difficult for both students and teachers, but I learned to be
          innovative and find new ways to engage my students online using
          websites and platforms like Flipgrid, Nearpod, and Minecraft Education
          Edition. During those 1.5 years, I discovered more of my love for
          technology and understanding how it works and even got to teach some
          of it to my students!
        </p>
        <br></br>
        <p>
          My husband is a travel physical therapist and we've been traveling
          around the U.S. since September of 2021. I had to pause my teaching
          career and that's when I found web development. I've been learning
          HTML, CSS, JavaScript, and WordPress through Skillcrush. I hope to
          land some freelance jobs that will lead me to a full-time career as a
          Frontend Web Developer. Check out some of my work below!
        </p>
      </div>
    </section>
  );
};

export default About;
