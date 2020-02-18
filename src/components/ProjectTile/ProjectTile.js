import React from "react";
import "./ProjectTile.css";

function ProjectTile(props) {
    return(
        <div className="project-tile">
            <div style={{backgroundImage: `url(${props.imgUrl})` ,backgroundSize: "cover", backgroundPosition: "center"}} className="project-image"></div>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <div className="project-links">
                <a className="project-url" href={props.projectUrl} target="_blank"><strong>Ver Projeto</strong></a>
                <a className="project-url" href={props.projectGithub} target="_blank"><strong>Ver Repositório</strong></a>
            </div>
        </div>
    )
};

export default ProjectTile;