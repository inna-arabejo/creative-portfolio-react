import React from "react";
let ProfilePic = require ("../images/profile-pic.JPG");

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              src={ProfilePic} alt="My professional profile" class="img-fluid rounded mb-4 mb-lg-0" width="300" height="300"
            />
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Home</h1>
            <p>
              My name is Inna Arabejo, and I am an
              aspiring full stack developer versed in building projects from the ground up. I am an up-and-coming graduate of the Full Stack Web Development program from SMU Continuing and Professional Education; a rigorous program with a primary focus on MERN Stack web applications.
            </p> 
            <p> 
              To me, web development isn't just about building functional code and delivering aesthetically pleasing web pages, but also how accessable it is. It's about building an application that improves access to information so it is easier to navigate and connect users to the services they need.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;