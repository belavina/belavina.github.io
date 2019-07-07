import React from "react";
import { createHistory, Router, LocationProvider } from "@reach/router";
import createHashSource from "hash-source";

// Shared components
import Header from "./shared/Header";
import Background from "./shared/Background";

// Tab content
import About from "./about/About";
import Experience from "./experience/Experience";
import Contact from "./contact/Contact";

// use hash-based urls
const source = createHashSource();
const history = createHistory(source);

export default function App() {
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
