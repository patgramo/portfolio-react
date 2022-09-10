import React, { Component } from "react";
import { Card } from "./Card.js";
import { projects } from "./data.js";
import "./Projects.css";

const renderCard = (project) => (
  <Card
    href={project.href}
    src={project.src}
    alt={project.alt}
    title={project.title}
    description={project.description}
    key={project.id}
  />
);

const Projects = () => {
  const cardElements = projects.map(renderCard);
  return (
    <div id="projects-section">
      <h1 className="title">Projects</h1>
      {cardElements}
    </div>
  );
};

export default Projects;
