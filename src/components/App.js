import React from "react";
import { createHistory, Router, LocationProvider } from "@reach/router";
import createHashSource from "hash-source";

// Shared components
import Header from "./Header";
import Background from "./Background";

// Tab content
import About from "./About";
import Experience from "./Experience";
import Contact from "./Contact";

// use hash-based urls
const source = createHashSource();
const history = createHistory(source);

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
