import React, { useState } from "react";
import ArrowIcon from "../../assets/svg/arrow.svg";
import "./ProjectCard.style.scss";

const ProjectCard = ({ name, description, repoURL, windowWidth }) => {
  const [collapsed, setCollapsed] = useState(true);

  const onClick = () => {
    setCollapsed(!collapsed);
  };

  return windowWidth < 750 ? (
    <div className="projects_view__projects_list__project_card">
      <div className="projects_view__projects_list__project_card__header">
        <h2 className="projects_view__projects_list__project_card__header__title">
          {name}
        </h2>
      </div>
      <div
        className={`projects_view__projects_list__project_card__content${
          collapsed ? "--collapsed" : ""
        }`}
      >
        {!collapsed && (
          <>
            <p className="projects_view__projects_list__project_card__content__description">
              {description}
            </p>
            <div className="projects_view__projects_list__project_card__content__link_btn">
              <a href={repoURL} target="_blank" rel="noreferrer">
                Ver repositorio
              </a>
            </div>
          </>
        )}
        <button onClick={onClick}>
          <ArrowIcon
            style={{
              transform: collapsed ? "rotate(0deg)" : "rotate(180deg)",
            }}
          />
        </button>
      </div>
    </div>
  ) : (
    <div className="projects_view__projects_list__project_card">
      <div className="projects_view__projects_list__project_card__header">
        <h2 className="projects_view__projects_list__project_card__header__title">
          {name}
        </h2>
      </div>
      <div className="projects_view__projects_list__project_card__content">
        <p className="projects_view__projects_list__project_card__content__description">
          {description}
        </p>
        <div className="projects_view__projects_list__project_card__content__link_btn">
          <a href={repoURL} target="_blank" rel="noreferrer">
            Ver repositorio
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
