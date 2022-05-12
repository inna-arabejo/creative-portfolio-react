import React from "react";
import { saveAs } from "file-saver";
// import ResumePDF from "../images/inna-resume.pdf";
import Type from "./Type";

function Home() {
  const saveFile = () => {
    saveAs(
      "https://docs.google.com/document/d/1Ow4ftwaiNJcEvClex3HIQE7mcO0JYVGLqq7UHe2OZtc/edit?usp=sharing",
      "Inna-Resume.pdf"
    );
  }
  return (
    <div className="home">
      <div class="container">
      <section className="home-section" id="home">
        <div className="home-content">
          <span className="wave" role="img" aria-labelledby="wave">👋🏻Hi There!</span>
          <h1 className="main-name"> Welcome to my portfolio.</h1>

          <div class="type-writer" style={{ padding: 50, textAlign: "center" }}>
            <Type />
          </div>
          <div>
            <button onClick={saveFile}>Download Resume</button>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Home;