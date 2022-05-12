import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../images/girl-coder.png";
// import Particle from "../Particle";
// import HomeIntro from "./HomeIntro";
import Type from "./Type";

function Home() {
  return (
    <div className="home">
      <div class="container">
      <section>
      <Container fluid className="home-section" id="home">
        {/* <Particle /> */}
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There! <span className="wave" role="img" aria-labelledby="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Inna Arabejo</strong>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img src={homeLogo} alt="home pic" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </Container>
      {/* <HomeIntro /> */}
    </section>
      </div>
    </div>
  );
}

export default Home;