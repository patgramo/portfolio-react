import React, { Component } from "react";
import "./Hero.css";
import heroImage from "../images/heroImage.jpg";

class Hero extends Component {
  render() {
    const myStyle = {
      backgroundImage: `url(${heroImage})`,
      height: "100vh",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center bottom"
    };
    return (
      <div className="hero" style={myStyle}>
        <h1 className="hero-title">Hi, I’m Patrick</h1>
        <p className="hero-desc">
          A Front End Web Developer traveling around the U.S!
        </p>
      </div>
    );
  }
}

export default Hero;
