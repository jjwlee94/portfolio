import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components
import Nav from "./Nav.js";
import Main from "./Main.js";
import Projects from "./Projects.js";

// Stylesheet
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
