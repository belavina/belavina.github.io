import React, { useState } from "react";
import Navigation from "./Navigation";

function Header() {
  const [centered, setCentered] = useState(window.location.hash == "#/");
  const headerPosition = centered ? "header--centered" : "header--top";

  return (
    <header className={`header ${headerPosition}`}>
      <h1 className="heading-primary">
        <span className="heading-primary--main">Olga Belavina</span>
        <span className="heading-primary--sub">Software Developer</span>
      </h1>
      <Navigation moveHeaderUp={() => setCentered(false)} />
    </header>
  );
}

export default Header;
