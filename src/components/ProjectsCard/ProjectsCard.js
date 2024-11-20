import "./ProjectsCard.css";

import React from "react";

import { NavLink } from "react-router-dom";

const ProjectsCard = (props) => {
  return (
    <div className="project-card">
      <img src={props.imgsrc} alt="travel-website-image" />
      <h2 className="project-title"> {props.title} </h2>
      <div className="project-details">
        <p> {props.text} </p>
        <div className="project-btns">
          <NavLink to={props.livedemo} className="btn">
            {" "}
            Live Demo{" "}
          </NavLink>
          <NavLink to={props.sourcecode} className="btn">
            {" "}
            Github{" "}
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ProjectsCard;
