import React, { useRef } from "react";

// Icons
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import {
  SiBookstack,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiRuby,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiRubyonrails,
  SiBootstrap,
  SiMaterialui,
  SiMocha,
  SiChai,
  SiJest,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGooglecloud,
  SiGit,
} from "react-icons/si";
import { BsChevronDoubleDown } from "react-icons/bs";
import { FaLaptopCode, FaCanadianMapleLeaf } from "react-icons/fa";

// Stylesheet
import "./Main.css";

const Main = () => {
  const introSection = useRef(null);
  const stackSection = useRef(null);

  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div className="main-container">
      <div className="intro-container" ref={introSection}>
        <div className="main-title">
          <div className="profile-image" />
          <div className="profile-description">
            <h1>
              Hi there, my name is <span id="first-name">Jeewon</span>
            </h1>
            <h2 id="profile-text">
              I'm a Full Stack Developer
              <FaLaptopCode id="profile-icon" color="grey" />
            </h2>
            <h2 id="profile-text">
              From Toronto, Canada
              <FaCanadianMapleLeaf id="profile-icon" color="red" />
            </h2>
            <h2 id="profile-sns">
              Find me here
              <a href="https://www.github.com/jjwlee94" id="sns-link">
                <AiFillGithub fontSize={20} id="sns-icons" />
              </a>
              <a
                href="https://www.linkedin.com/in/jeewon-lee-dev"
                id="sns-link">
                <AiFillLinkedin fontSize={20} id="sns-icons" />
              </a>
              <a href="mailto:jeewon.jlee@gmail.com" id="sns-link">
                <AiFillMail fontSize={20} id="sns-icons" />
              </a>
            </h2>
          </div>
        </div>

        <BsChevronDoubleDown
          className="arrow bounce"
          onClick={() => scrollDown(stackSection)}
        />
      </div>

      <div className="profile-stack" ref={stackSection}>
        <div className="stack-title">
          <SiBookstack fontSize={30} />
          <h1 id="stack-title">
            My <span id="stack-title">Stack</span>
          </h1>
        </div>
        <div className="stack-section">
          <div className="stack-one">
            <div className="stack-cards">
              <div id="stack-icon">
                <SiJavascript fontSize={40} />
                <span id="stack-name">JavaScript</span>
              </div>
              <div id="stack-icon">
                <SiHtml5 fontSize={40} />
                <span id="stack-name">HTML</span>
              </div>
              <div id="stack-icon">
                <SiCss3 fontSize={40} />
                <span id="stack-name">CSS</span>
              </div>
            </div>
            <div className="stack-cards">
              <div id="stack-icon">
                <SiRuby fontSize={40} />
                <span id="stack-name">Ruby</span>
              </div>
              <div id="stack-icon">
                <SiGit fontSize={40} />
                <span id="stack-name">Git</span>
              </div>
              <div id="stack-icon">
                <SiReact fontSize={40} />
                <span id="stack-name">React</span>
              </div>
            </div>
            <div className="stack-cards">
              <div id="stack-icon">
                <SiNodedotjs fontSize={40} />
                <span id="stack-name">Node</span>
              </div>
              <div id="stack-icon">
                <SiExpress fontSize={40} />
                <span id="stack-name">Express</span>
              </div>
              <div id="stack-icon">
                <SiRubyonrails fontSize={40} />
                <span id="stack-name">Rails</span>
              </div>
            </div>
            <div className="stack-cards">
              <div id="stack-icon">
                <SiBootstrap fontSize={40} />
                <span id="stack-name">Bootstrap</span>
              </div>
              <div id="stack-icon">
                <SiMaterialui fontSize={40} />
                <span id="stack-name">Material UI</span>
              </div>
            </div>
          </div>
          <div className="stack-two">
            <div className="stack-cards">
              <div id="stack-icon">
                <SiMocha fontSize={40} />
                <span id="stack-name">Mocha</span>
              </div>
              <div id="stack-icon">
                <SiChai fontSize={40} />
                <span id="stack-name">Chai</span>
              </div>
              <div id="stack-icon">
                <SiJest fontSize={40} />
                <span id="stack-name">Jest</span>
              </div>
            </div>
            <div className="stack-cards">
              <div id="stack-icon">
                <SiMongodb fontSize={40} />
                <span id="stack-name">MongoDB</span>
              </div>
              <div id="stack-icon">
                <SiPostgresql fontSize={40} />
                <span id="stack-name">PostgreSQL</span>
              </div>
              <div id="stack-icon">
                <SiMysql fontSize={40} />
                <span id="stack-name">MySQL</span>
              </div>
            </div>
            <div className="stack-cards">
              <div id="stack-icon">
                <SiDocker fontSize={40} />
                <span id="stack-name">Docker</span>
              </div>
              <div id="stack-icon">
                <SiKubernetes fontSize={40} />
                <span id="stack-name">Kubernetes</span>
              </div>
              <div id="stack-icon">
                <SiGooglecloud fontSize={40} />
                <span id="stack-name">Google Cloud</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
