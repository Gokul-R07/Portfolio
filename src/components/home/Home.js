import React, { useEffect, useState } from "react";
import "./Home.css";
import profilePic from "../../images/gokulBg.png";
import hirePic from "../../images/hire.png";
import {
  UilLinkedinAlt,
  UilGithubAlt,
  UilLink,
} from "@iconscout/react-unicons";
import Typed from "typed.js";

const Home = () => {
  const openEmail = () => {
    window.location.href = "mailto:gokulramdevan@gmail.com";
  };
  const [rotationAngle1, setRotationAngle1] = useState(0);
  const [rotationAngle2, setRotationAngle2] = useState(40);

  const divStyle1 = {
    transform: `rotate(${rotationAngle1}deg)`,
  };
  const divStyle2 = {
    transform: `rotate(${rotationAngle2}deg)`,
  };

  useEffect(() => {
    const typed3 = new Typed("#typed2", {
      strings: [
        "Hi,I'm Gokul R",
        "MERN stack developer",
        "I'm a passionate coder",
        "Learning new Tech Stacks",
      ],
      typeSpeed: 70,
      backSpeed: 10,
      smartBackspace: true,
      loop: true,
    });

    const interval = setInterval(() => {
      // Increment the rotation angle by 1 degree every 100 milliseconds
      // setRotationAngle1((prevAngle) => prevAngle - 1);
      // setRotationAngle2((prevAngle) => prevAngle + 1);
    }, 100); // 100 milliseconds = 0.1 second
    return () => {
      typed3.destroy(); // Clean up the Typed instance when the component unmounts
      clearInterval(interval);
    };
  }, []);

  return (
    <div id="Home">
      <div className="icons">
        <a href="https://www.linkedin.com/in/gokul-r07/">
          <svg className="logo">
            <UilLinkedinAlt />
            <title>LinkedIn</title>
          </svg>
        </a>
        <a href="https://github.com/Gokul-R07">
          <svg className="logo">
            <UilGithubAlt />
            <title>Github</title>
          </svg>
        </a>
        <a href="https://linktr.ee/gokul_R07">
          <svg className="logo">
            <UilLink />
            <title>Linktree</title>
          </svg>
        </a>
      </div>
      <div className="desc">
        <div>
          <span id="typed2" className="movingText"></span>
        </div>

        <p>
          Enthusiastic fullstack developer seeking dynamic internship to build
          end-to-end websites and bring fresh ideas to your team!
        </p>
        <button className="btn" onClick={openEmail}>
          Hire Me
          <img src={hirePic} alt="" />
        </button>
      </div>
      <div className="photo">
        <div className="profileBackground box1" style={divStyle1}></div>
        <div className="profileBackground box2" style={divStyle2}></div>
        <img src={profilePic} alt="" />
      </div>
    </div>
  );
};

export default Home;
