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
            <FaGithub className="Nav_Icon" />
            <FaEnvelopeO className="Nav_Icon" />
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
