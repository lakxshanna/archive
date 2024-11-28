import React, { useState } from 'react';
import './App.css';
import InteractiveMap from './components/interactivemap';
import Landing from './components/landing';
import About from './components/About';
import Navigation from './Navigation';
import Music from './components/music';
import Documentary from './components/documentary';
import Gallery from './components/Gallery';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [musicHeight, setMusicHeight] = useState(0);

  return (
    <div className="App">
      <Navigation />
      <div id="landing">
        <Landing />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="map" style={{ marginBottom: '50px' }}> 
        <InteractiveMap />
      </div>
      <div
        id="music"
        style={{
          paddingBottom: `${musicHeight}px`, // Dynamically adjust padding
          transition: 'padding-bottom 0.3s ease',
        }}
      >
        <Music onHeightChange={(height) => setMusicHeight(height)} />
      </div>

      <div id="documentary"  >
        <Documentary />
      </div>
      <div id="gallery">
        <Gallery />
      </div>
    </div>
  );
}

export default App;
