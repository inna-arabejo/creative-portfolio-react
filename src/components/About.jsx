import React from "react";
let ProfilePic = require ("../images/profile-pic.JPG");
let ReactIcon = require ("../images/icons/Reacticon.svg.png");
let NodeJS = require ("../images/icons/nodejs.png");
let JavaScript = require ("../images/icons/js.png");
let CSSIcon = require ("../images/icons/css.png");
let HTMLIcon = require ("../images/icons/html.png");
let bootstrapIcon = require ("../images/icons/bootstraplogo.png");
let mongoDB = require ("../images/icons/mongodbicon.png");
let ExpressJS = require ("../images/icons/expressicon.png");
let VSCode = require ("../images/icons/vscode.png");
let Insomnia = require ("../images/icons/insomniaicon.png");
let heroku = require ("../images/icons/heroku.png");
let gitHub = require ("../images/icons/github.png");
let StackOverFlow = require ("../images/icons/stackoverflow.png");
let trello = require ("../images/icons/trello.png");

function About() {
  return (
    <div className="about">
      <div class="container">
      <section class="about">
        <h1 class="font-weight-heavy">About</h1>
        <div class="row align-items-center my-5">
          <div class="col-lg-5">
            <img
              src={ProfilePic} alt="My professional profile" class="img-fluid rounded mb-4 mb-lg-0" width="300" height="300"  
            />
          </div>
            
          <div class="col-lg-6 about-paragraph">
            <p>
              My name is Inna Arabejo, and I am an
              aspiring full stack developer versed in building projects from the ground up. I am a graduate of the Full Stack Web Development program from SMU Continuing and Professional Education; a rigorous program with a primary focus on MERN Stack web applications.
            </p> 
            <p> 
              To me, web development isn't just about building functional code and delivering aesthetically pleasing web pages, but also how accessable it is. It's about building an application that improves access to information so it is easier to navigate and connect users to the services they need.
            </p>
          </div>

          {/* My Skills */}
          <section id="skills-tools">
            <div class="my-skills">
              <h3 id="skill-font">My Skills</h3>
              <div class="row frameworks-languages">
                <div class="col">
                  <img src={ReactIcon} alt = "React Icon" width = "100" height = "100" />
                  <h5>React</h5>
                </div>
                <div class="col">
                  <img src={NodeJS} alt = "NodeJS Icon" width = "125" height = "100" />
                  <h5>Node.js</h5>
                </div>
                <div class="col">
                  <img src={JavaScript} alt = "JavaScript Icon" width = "100" height = "100" />
                  <h5>JavaScript</h5>
                </div>
                <div class="col">
                  <img src={CSSIcon} alt = "CSS Icon" width = "80" height = "100" />
                  <h5>CSS</h5>
                </div>
                <div class="col">
                  <img src={HTMLIcon} alt = "HTML Icon" width = "100" height = "100" />
                  <h5>HTML</h5>
                </div>
                <div class="col">
                  <img src={bootstrapIcon} alt = "Bootstrap Icon" width = "125" height = "100" />
                  <h5>Bootstrap</h5>
                </div>
                <div class="col">
                  <img src={mongoDB} alt = "MongoDB Icon" width = "100" height = "100" />
                  <h5>MongoDB</h5>
                </div>
                <div class="col">
                  <img src={ExpressJS} alt = "ExpressJS Icon" width = "100" height = "100" />
                  <h5>Express.js</h5>
                </div>
              </div>
            </div>

            <div class="tools">
              <div class="row technologies">
                <div class="col">
                  <img src={VSCode} alt = "VS Code Icon" width = "100" height = "100" />
                  <h5>Visual Studio Code</h5>
                </div>
                <div class="col">
                  <img src={Insomnia} alt = "Insomnia Icon" width = "100" height = "100" />
                  <h5>Insomnia</h5>
                </div>
                <div class="col">
                  <img src={heroku} alt = "Heroku Icon" width = "150" height = "100" />
                  <h5>Heroku</h5>
                </div>
                <div class="col">
                  <img src={gitHub} alt = "GitHub Icon" width = "150" height = "100" />
                  <h5>GitHub</h5>
                </div>
                <div class="col">
                  <img src={StackOverFlow} alt = "StackOverflow Icon" width = "150" height = "100" />
                  <h5>Stack Overflow</h5>
                </div>
                <div class="col">
                  <img src={trello} alt = "Trello Icon" width = "150" height = "100" />
                  <h5>Trello</h5>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      </div>
    </div>
  );
}

export default About;