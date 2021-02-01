import React, { useState } from "react";
import "./Projects.style.scss";
import back from "../../assets/back.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import { projects_data } from "./constants";

const Projects = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  window.addEventListener("resize", () => {
    setWindowWidth(window.innerWidth);
  });

  const project_cards = projects_data.map((data, i) => (
    <ProjectCard key={i} {...data} windowWidth={windowWidth} />
  ));

  return (
    <article className="projects_view">
      <div className="projects_view__header">
        <h1>Portafolio de proyectos</h1>
      </div>
      <div className="projects_view__projects_list">{project_cards}</div>
      <div className="projects_view__background">
        <img src={back} alt="background_image_vsc" />
      </div>
    </article>
  );
};

export default Projects;
