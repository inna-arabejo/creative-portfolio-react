import React from "react";
import Type from "./Type";
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';

function Home() {
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
        </div>
      </section>
      </div>

      <div className="footer">
      <footer class="py-2 footer-color fixed-bottom">
        <div class="container">
          <ul>
            <a href="https://www.linkedin.com/in/inna-arabejo-449699171/" target="_blank" rel="noreferrer" class="footer-icons">
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/inna-arabejo" target="_blank" rel="noreferrer" class="footer-icons">
              <FaGithub />
            </a>
            <a href="mailto:inna.arabejo@gmail.com?subject=" target="_blank" rel="noreferrer" class="footer-icons">
              <FaEnvelope />
            </a>
          </ul>
          <p class="m-0 text-center copyright text-white">
            Copyright &copy; Inna Arabejo 2022
          </p>
        </div>
      </footer>
    </div>
    </div>
  );
}

export default Home;