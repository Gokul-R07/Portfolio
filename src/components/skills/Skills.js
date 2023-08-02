import React from "react";
import "./Skills.css";
import { frontend } from "../../data/frontend";
import { backend } from "../../data/backend";
import { database } from "../../data/database";
import { others } from "../../data/others";
import { programming } from "../../data/programming";

const Skills = () => {
  return (
    <div id="Skills">
      <h3 className="title skillTitle">SKILLS</h3>
      <p className="subTitle">My Technical skills</p>
      <br />
      <div className="skillsContainer" data-aos="fade-right">
        <h3>Frontend Skills</h3>
        <div className="skills">
          {frontend.map((item) => (
            <div key={item.name} className="skill">
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="skillsContainer" data-aos="fade-right">
        <h3>Backend Skills</h3>
        <div className="skills">
          {backend.map((item) => (
            <div key={item.name} className="skill">
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="skillsContainer" data-aos="fade-right">
        <h3>DataBase and Version Control</h3>
        <div className="skills">
          {database.map((item) => (
            <div key={item.name} className="skill">
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="skillsContainer" data-aos="fade-right">
        <h3>Other skills</h3>
        <div className="skills">
          {others.map((item) => (
            <div key={item.name} className="skill">
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
      <br />
      <div className="skillsContainer" data-aos="fade-right">
        <h3>Programming skills</h3>
        <div className="skills">
          {programming.map((item) => (
            <div key={item.name} className="skill">
              <img src={item.logo} alt={item.name} />
              <p>{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
