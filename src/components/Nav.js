import React from "react";

// Icons
import {
  AiFillHome,
  AiFillCode,
  AiFillIdcard,
  AiFillGithub,
  AiFillLinkedin,
  AiFillMail,
} from "react-icons/ai";

// Stylesheet
import "./Nav.css";

const Nav = () => {
  return (
    <div className="navbar-container">
      <div className="navbar-section">
        <div id="section-title">Navigate To</div>
        <a href="/" id="section-links">
          <AiFillHome id="nav-icon" fontSize={20} />
          <p id="section-text">Home</p>
        </a>
        <a href="/projects" id="section-links">
          <AiFillCode id="nav-icon" fontSize={20} />
          <p id="section-text">Projects</p>
        </a>
        <a
          href="https://resume.creddle.io/resume/69v9kw3qbcm"
          id="section-links">
          <AiFillIdcard id="nav-icon" fontSize={20} />
          <p id="section-text">Resume</p>
        </a>
      </div>
      <div className="contact-links">
        <div id="section-title">Contact Me</div>
        <a href="https://www.github.com/jjwlee94" id="icon-links">
          <AiFillGithub fontSize={30} />
        </a>
        <a href="https://www.linkedin.com/in/jeewon-lee-dev" id="icon-links">
          <AiFillLinkedin fontSize={30} />
        </a>
        <a href="mailto:jeewon.jlee@gmail.com" id="icon-links">
          <AiFillMail fontSize={30} />
        </a>
      </div>
    </div>
  );
};

export default Nav;
