import React, { Fragment } from 'react';
import Header from './Header';
import Background from './Background';
import About from './About';

export default class App extends React.Component {

  state = {
    selectedTab: null,
  }

  switchContent = (tabName) => this.setState({ selectedTab: tabName });

  render() {

    let content = null;
    if (this.state.selectedTab == 'about') {
      content = <About/>;
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
