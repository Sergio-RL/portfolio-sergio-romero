import React from "react";
import "./ProjectCard.style.scss";

const ProjectCard = ({ name, description, repoURL }) => {
  return (
    <div className="projects_view__projects_list__project_card">
      <h2 className="projects_view__projects_list__project_card__title">
        {name}
      </h2>
      <div className="projects_view__projects_list__project_card__content">
        <p className="projects_view__projects_list__project_card__content__description">
          {description}
        </p>
        <div className="projects_view__projects_list__project_card__content__link_btn">
          <a href={repoURL}>Ver repositorio</a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
