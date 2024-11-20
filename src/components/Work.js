

import React from "react";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import ProjectCardData from "./ProjectCardData";
import { NavLink } from "react-router-dom";

const Work = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading"> My Projects</h1>
      <div className="project-container">
        {ProjectCardData.map((value, index) => {
            return (
                < ProjectsCard key={index} imgsrc={value.imgsrc}
                title={value.title} text={value.text} livedemo={value.livedemo} sourcecode={value.sourcecode} />
            )
        })}
      </div>
    </div>
  );
};

export default Work;
