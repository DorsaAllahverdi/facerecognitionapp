import React, { Component } from 'react';
import 'tachyons';
import './App.css';
import ParticlesBg from 'particles-bg';
import Navigation from './Components/Navigation/Navigation';
import Logo from './Components/Logo/Logo';
import Rank from './Components/Rank/Rank';
import ImageLinkInput from './Components/ImageLinkInput/ImageLinkInput';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ParticlesBg type="circle" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkInput />
      </div>
    );
  }
}

export default App;
