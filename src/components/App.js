import React, { Fragment } from 'react';

// shared
import Header from './Header';
import Background from './Background';

// content
import About from './About';
import Experience from './Experience';

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
