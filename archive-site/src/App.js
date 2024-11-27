import React from 'react';
import './App.css';
import InteractiveMap from './components/interactivemap';
import Landing from './components/landing';
import About from './components/About';
import Navigation from './Navigation';
import Music from './components/music';
import Documentary from './components/documentary';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="landing">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="map">
        <InteractiveMap />
      </div>
      <div id="music">
        <Music />
      </div>
      <div id="documentary">
        <Documentary />
      </div>
    </div>
  );
}

export default App;
