import React from "react";
import Navigation from './Navigation';

class Header extends React.Component {

  state = { centered: true }
  handleNavigationSelection = (tabName) => {
    this.setState({ centered: false });
    this.props.switchContent(tabName);
  }

  render () {

    const headerPosition = this.state.centered?'header--centered':'header--top';

    return (
      <header className={`header ${headerPosition}`}>
      <h1 className="heading-primary">
        <span className="heading-primary--main">Olga Belavina</span>
        <span className="heading-primary--sub">Software Developer</span>
      </h1>
      <Navigation
        onFocus={this.handleNavigationSelection}
      />
    </header>
    );
  }
}

export default Header;
