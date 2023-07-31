import React from "react";
import "./Projects.css";
import { UilGithubAlt } from "@iconscout/react-unicons";
import { UilEye } from "@iconscout/react-unicons";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <div id="Projects">
      <h3 className="title">PROJECTS</h3>
      <div className="projects">
        {projects.map((item) => (
          <div
            className="project"
            key={item.title}
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="projectImageDiv">
              <img src={item.image} alt="" className="projectImage" />
            </div>
            <div className="projectDesc">
              <h4>{item.title}</h4>
              <p className="pDesc">{item.desc}</p>
              <p>{item.techStack}</p>
              <div>
                <a
                  href={item.github}
                  className="btn projectBtn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                  <UilGithubAlt />
                </a>
                <a
                  href={item.liveUrl}
                  className="btn projectBtn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live
                  <UilEye />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
