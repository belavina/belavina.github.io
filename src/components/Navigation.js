import React from "react";
import { Link } from "@reach/router";

const Navigation = ({ navSelected }) => {
  
  const navItems = [
    {title: 'About', path: 'about'},
    {title: 'Experience', path: 'experience'},
    {title: 'Contact', path: 'contact'},
  ];

  return (
    <nav className="sidebar">
      <ul className="side-nav">
        {navItems.map((item) => (
          <li className="side-nav__item" key={item.path}>
            <Link to={item.path} onClick={navSelected} className="side-nav__link">
              {item.title}
            </Link>
          </li>
        ))}
        </ul>
    </nav>
  );
};

export default Navigation;
