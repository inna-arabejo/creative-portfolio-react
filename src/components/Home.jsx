import React from "react";
import Type from "./Type";

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
    </div>
  );
}

export default Home;