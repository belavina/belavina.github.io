import React from "react";
import { Link } from "@reach/router";
import PropTypes from "prop-types";

const Navigation = ({ moveHeaderUp }) => {
  const navItems = [
    { title: "About", path: "about" },
    { title: "Experience", path: "experience" },
    { title: "Contact", path: "contact" }
  ];

  return (
    <nav className="sidebar">
      <ul className="main-nav">
        {navItems.map(item => (
          <li className="main-nav__item" key={item.path}>
            <Link
              to={item.path}
              onClick={moveHeaderUp}
              className="main-nav__link"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

Navigation.propTypes = {
  /** notify header when any of the routing options/links are selected */
  moveHeaderUp: PropTypes.func.isRequired
};

export default Navigation;
