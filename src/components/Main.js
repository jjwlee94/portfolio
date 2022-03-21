import React from "react";

// Stylesheet
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="main-title">
        <div className="profile-image" />
        <div className="profile-description">
          <h1>
            Hi there, my name is <span id="first-name">Jeewon</span>
          </h1>
          <h2>and I'm a full stack developer</h2>
        </div>
      </div>
    </div>
  );
};

export default Main;
