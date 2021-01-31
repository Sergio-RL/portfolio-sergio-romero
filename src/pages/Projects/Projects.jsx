import React, { useState } from "react";
import "./Projects.style.scss";
import back from "../../assets/back.png";

import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const project_cards = [
    {
      name: "Adivina Quien",
      description: "Juego clasico de adivina quien con profes",
      repoURL: "#",
    },
    {
      name: "Malla docente (Backend)",
      description:
        "Proyecto de la parte del servidor de gestion de cursos de docentes",
      repoURL: "#",
    },
    {
      name: "Expediente clinico",
      description: "Proyecto que gestiona expedientes clinicos",
      repoURL: "#",
    },
    {
      name: "Agenda de citas medicas",
      description:
        "Proyecto de la parte del cliente para la gestion de citas medicas",
      repoURL: "#",
    },
    {
      name: "Portafolio de proyectos",
      description: "Portafolio que kreisi xdxd",
      repoURL: "#",
    },
  ].map(({ name, description, repoURL }, i) => (
    <ProjectCard
      key={i}
      name={name}
      description={description}
      repoURL={repoURL}
    />
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
