import React from "react";
import "./Card.css";

export const Card = (props) => (
  <div className="card">
    <a href={props.href} target="_blank">
      <img className="card-image" src={props.src} alt={props.alt} />
      <div className="card-body">
        <h3 className="card-title">{props.title}</h3>
        <p className="card-description">{props.description}</p>
      </div>
    </a>
  </div>
);
