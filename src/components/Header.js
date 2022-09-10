import { render } from "@testing-library/react";
import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <a href="/" className="logo">
        Patrick
      </a>
      <ul className="menu">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#skills-section">Skills</a>
        </li>
        <li>
          <a href="#projects-section">Projects</a>
        </li>
        <li>
          <a href="#contact-section">Contact</a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
