import React from "react";
import { FaLinkedinIn, FaGithub, FaEnvelope } from 'react-icons/fa';


function Footer() {
  return (
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
  );
}

export default Footer;