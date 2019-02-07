import React from "react";

const Navigation = ({ onFocus }) => {
  
  return (
    <nav className="sidebar">
      <ul className="side-nav">
        <li className="side-nav__item" onClick={() => onFocus('about')}>
          <a href="#" className="side-nav__link">
            <span>About</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Experience</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#" className="side-nav__link">
            <span>Contact</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
