import React, { Component } from 'react';
import { FaGithub, FaEnvelopeO } from 'react-icons/lib/fa';
import logo from './mc-icon.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="Nav">
          <img src={logo} className="Nav_Logo" alt="logo" />
          <div className="Nav_Title">Shane Boyar</div>
          <div className="Nav_Icons">
            <a href="https://github.com/shaneboyar"><FaGithub className="Nav_Icon" /></a>
            <a href="mailto: shaneboyar@gmail.com"><FaEnvelopeO className="Nav_Icon" /></a>
          </div>
        </header>
        <div className="Body">
          <div className="Body_Intro">
            <p>Coming Soon. In the meantime check out my github or email me.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
