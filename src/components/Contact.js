import React from "react";
import "./Contact.css";
/*import { Map, GoogleApiWrapper } from "@react-google-maps/api";*/

const Contact = () => {
  return (
    <div id="contact-section">
      <h1 className="title">Contact Me</h1>
      <div className="left-side">
        <h2>I'm here!</h2>
        <p>I'm currently living in West Hollywood, CA. If you'd like to grab a coffee and discuss future projects fill out the form to the right.</p>
      </div>
      <div className="form">
        <form>
          <input className="name" type="text" placeholder="Name" />
          <input className="email" type="email" placeholder="Email" />
          <input className="subject" type="text" placeholder="Subject" />
          <textarea
            className="project"
            rows="5"
            id="comment"
            name="text"
            placeholder="Project Details"
          ></textarea>
        </form>
        <button className="contact-button">Contact Me</button>
      </div>
    </div>
  );
};

export default Contact;
