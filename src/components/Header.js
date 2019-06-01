import React from "react";
import Navigation from "./Navigation";

class Header extends React.Component {
  state = { centered: window.location.hash == "#/" };

  render() {
    const headerPosition = this.state.centered
      ? "header--centered"
      : "header--top";

    return (
      <header className={`header ${headerPosition}`}>
        <h1 className="heading-primary">
          <span className="heading-primary--main">Olga Belavina</span>
          <span className="heading-primary--sub">Software Developer</span>
        </h1>
        <Navigation moveHeaderUp={() => this.setState({ centered: false })} />
      </header>
    );
  }
}

export default Header;
