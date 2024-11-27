// src/App.js
import React from 'react';
import './App.css';
import InteractiveMap from './components/interactivemap';
import Landing from './components/landing';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
      <h1>We Shall Not Be Moved - IN DEV</h1>
      <Landing />
      <InteractiveMap />
    </div>
  );
}
export default App;