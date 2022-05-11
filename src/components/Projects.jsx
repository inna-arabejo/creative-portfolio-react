import React from "react";
import { FaGithub, FaNodeJs, FaHtml5, FaCss3, FaBootstrap } from 'react-icons/fa';
import { SiExpress, SiMysql, SiSequelize, SiSocketdotio, SiHandlebarsdotjs, SiJavascript, SiHeroku } from 'react-icons/si';
let nerdsMeetsNerds = require ("../images/nerds-meet-nerds.jpg");
let junkfood = require ("../images/junkfood.jpg");
let noteTaker = require ("../images/note-taker.jpg");
let dailyPlanner = require ("../images/daily-planner-screenshot.jpg");
let teamProfileGenerator = require ("../images/team-profile-generator.jpg");
let passwordGenerator = require ("../images/portfolio-password.jpg");
let codeQuiz = require ("../images/code-quiz.jpg");

function Projects() {
  return (
    <div className="projects">
      <section class="projects">
        <h1 class="font-weight-heavy">Projects</h1> 
        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://nerds-meet-nerds.herokuapp.com/"><h3>Nerds Meet Nerds</h3></a>
          <div class="image" id="first-card" >
            <img class="image-img thumbnail" src={nerdsMeetsNerds} alt="Dating app for all types of nerds." width="300" height="300"/>
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">With the current trend of niche dating apps, Nerds Meet Nerds brings introverts, anime fans, and all other nerds a platform to interact with each other. This is a place where they can geek out and be matched with compatible users based on their interests and allow real-time messaging. 
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/Nerds-Meet-Nerds"><FaGithub /></a> |
            <SiExpress />
            <SiMysql />
            <SiSequelize />
            <SiHeroku />
            <FaNodeJs />
            <SiSocketdotio />
            <SiHandlebarsdotjs />
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* Express/Session/MySQL/Sequelize/Node/Socket.io/Handlebars/Bcrypt/JS/CSS/HTML */}
          </p>
        </article>

        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://inna-arabejo.github.io/g3p-junkfood/"><h3>junkfood.</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={junkfood} alt="API generated memes and gifs." />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">Junkfood is a dynamic web application that displays api-generated memes and gifs. This is for any individual ages 13 and up who need a little laugh in their life. 
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/g3p-junkfood"><FaGithub /></a> |
            <FaBootstrap />
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* HTML/CSS/JS/Bootstrap/API */}
          </p>
        </article>
        
        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://note-taker-inna.herokuapp.com/"><h3>Note Taker</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={noteTaker} alt="Takes notes, saves, and deletes it." />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">A note-taker that allows a user to organize and keep track of tasks. It allows a user to save their notes for future reference or delete it.
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/note-taker"><FaGithub /></a> |
            <SiExpress />
            <FaBootstrap />
            <SiHeroku />
            <FaNodeJs />
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* Express/Heroku/Node/HTML/CSS/JS  */}
          </p>
        </article>

        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://inna-arabejo.github.io/daily-work-planner/"><h3>Daily Planner</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={dailyPlanner} alt="Daily planner" />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">A 9-5 work planner that allows an employee to schedule daily events. Each hour is color-coded to tell past, present, and future time.
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/daily-work-planner"><FaGithub /></a> |
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
            <FaBootstrap />
              {/* Moment.js/API/Bootstrap  */}
          </p>
        </article>
        
        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://note-taker-inna.herokuapp.com/"><h3>Team Profile Generator</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={teamProfileGenerator} alt="Generates employee profile" />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">***Note: This application is not deployed. To generate a team profile, follow the README instructions in my repository.*** 
              A team profile generator that allows an employer to access and manage their employee's profile. Based in the employee's title, a profile is generated with their specific information.
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/team-profile-generator"><FaGithub /></a> |
            <SiExpress />
            <SiHeroku />
            <FaNodeJs />
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* Express/Heroku/Node/HTML/CSS/JS  */}
          </p>
        </article>
        
        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://inna-arabejo.github.io/password-generator-js/"><h3>Password Generator</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={passwordGenerator} alt="Password generator based on given prompt." />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">A password generator that generates random passwords based on given user criteria. 
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/password-generator-js"><FaGithub /></a> |
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* HTML/CSS/JS */}
          </p>
        </article>
        
        <article class="box-card">
          <a target="_blank" rel="noreferrer" href="https://inna-arabejo.github.io/web-api-code-quiz/"><h3>Code Quiz</h3></a>
          <div class="image">
            <img class="image-img thumbnail" src={codeQuiz} alt="Multiple choice code quiz" />
            <div class="image-overlay image-overlay-blur">
              <p class="image-description">A code quiz that consists of multiple choice questions. When the user chooses the right answer, the next question appears. If the wrong answer is chosen, the timer is reduced. User is then able to save their score.
              </p>
            </div>
          </div>
          <p class="icons">
            <a class="github" target="_blank" rel="noreferrer" href="https://github.com/inna-arabejo/web-api-code-quiz"><FaGithub /></a> | 
            <SiJavascript />
            <FaHtml5 />
            <FaCss3 />
              {/* HTML/CSS/JS  */}
          </p>
        </article>
          
           {/* <article class="box-card">
            <a target="_blank" href="https://inna-arabejo.github.io/semantic-html/"><h3>Horiseon</h3></a>
            <div class="image">
              <img class="image-img" src="./Assets/images/search-engine-optimization.jpg" alt="Refactored page." class="thumbnail"/>
              <div class="image-overlay image-overlay-blur">
                <p class="image-description">A refactored webpage that improves web accessibility with proper semantic structure and comments in both HTML and CSS.
                </p>
              </div>
            </div>
            <p><a target="_blank" href="https://github.com/inna-arabejo/semantic-html">REPO |</a> HTML/CSS</p>
          </article>  */}
      </section>
    </div>

  );
}

export default Projects;