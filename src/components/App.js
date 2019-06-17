import React from "react";
import { createHistory, Router, LocationProvider } from "@reach/router";
import createHashSource from "hash-source";

// shared
import Header from "./Header";
import Background from "./Background";

// content
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

let source = createHashSource();
let history = createHistory(source);

export default class App extends React.Component {
  render() {
    return (
      <>
        <LocationProvider history={history}>
          <Header />
          <Router>
            <About path="about" />
            <Experience path="experience" />
            <Contact path="contact" />
          </Router>
        </LocationProvider>
        <Background />
      </>
    );
  }
}
