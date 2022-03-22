import React from "react";

import { AiFillCode } from "react-icons/ai";

// Images
import EZChef from "../docs/ez-chef.jpg";
import WeatherApp from "../docs/weather-app.png";
import Tweeter from "../docs/tweeter.png";

// Stylesheet
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-container">
      <div className="projects-title">
        <AiFillCode fontSize={30} />
        <h1 id="projects-title">
          My <span id="projects-title">Projects</span>
        </h1>
      </div>
      <div className="project-cards">
        <div className="project-card">
          <a href="https://weather-miniproject.netlify.app/" id="project-link">
            <img src={WeatherApp} id="project-image" alt="simpleweatherapp" />
            <div className="project-title">Simple Weather App</div>
          </a>
        </div>
        <div className="project-card">
          <a href="https://www.github.com/jjwlee94/ez-chef" id="project-link">
            <img src={EZChef} id="project-image" alt="ez-chef" />
            <div className="project-title">EZ Chef</div>
          </a>
        </div>
        <div className="project-card">
          <a
            href="https://www.github.com/jjwlee94/passwordkeepr"
            id="project-link">
            <img src={EZChef} id="project-image" alt="passwordkeepr" />
            <div className="project-title">PasswordKeepR</div>
          </a>
        </div>
        {/* <div className="project-card">
          <a href="https://www.github.com/jjwlee94/tweeter" id="project-link">
            <img src={Tweeter} id="project-image" alt="tweeter" />
            <div className="project-title">Tweeter</div>
          </a>
        </div> */}
      </div>
    </div>
  );
};

export default Projects;
