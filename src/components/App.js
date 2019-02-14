import React, { Fragment } from 'react';

// shared
import Header from './Header';
import Background from './Background';

// content
import About from './About';
import Experience from './Experience';
import Contact from './Contact';

export default class App extends React.Component {

  state = {
    selectedTab: null,
  }

  switchContent = (tabName) => this.setState({ selectedTab: tabName });

  render() {

    let content = null;
    if (this.state.selectedTab == 'about') {
      content = <About/>;
    } else if (this.state.selectedTab == 'experience') {
      content = <Experience/>;
    } else if (this.state.selectedTab == 'contact') {
      content = <Contact/>;
    }

    return (
      <Fragment>
        <Header switchContent={this.switchContent}/>
        {content}

        <Background/>
      </Fragment>
    );
  }
}
