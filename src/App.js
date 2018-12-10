import React, { Component } from 'react';
import LandingPage from './pages/LandingPage';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Nav from './components/Nav';

class App extends Component {
  render() {
    return (
      <div className="app">
        <LandingPage {...this.props}/>
        <Page2 {...this.props} />
        <Page3 {...this.props} />
      </div>
    );
  }
}

export default Nav(App);
