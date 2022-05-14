import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {
  Navigation,
  Footer,
  Home,
  About,
  Contact,
  Projects,
  Resume,
} from "./components";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/creative-portfolio-react/home" element={<Home />} />
      <Route path="/creative-portfolio-react/about" element={<About />} />
      <Route path="/creative-portfolio-react/contact" element={<Contact />} />
      <Route path="/creative-portfolio-react/projects" element={<Projects />}/>
      <Route path="/creative-portfolio-react/resume" element={<Resume />}>
      </Route>
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

serviceWorker.unregister();
