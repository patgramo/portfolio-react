import React from "react";
import { Card } from "./Card.js";
import { skills } from "./data.js";
import "./Skills.css";

const renderCard = (skill) => (
  <Card
    href={skill.href}
    image={skill.image}
    alt={skill.alt}
    title={skill.title}
    description={skill.description}
    key={skill.id}
  />
);

const Skills = () => {
  const cardElements = skills.map(renderCard);
  return (
    <div className="skills-section">
      <h1 className="title">Skills</h1>
      {cardElements}
    </div>
  );
};

export default Skills;
