// src/App.js
import React from 'react';
import './App.css';
import InteractiveMap from './components/interactivemap';
import Landing from './components/landing';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="App">
        <h1>We Shall Not Be Moved - IN DEV</h1>
        
        {/* Define Routes */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/map" element={<InteractiveMap />} />
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
