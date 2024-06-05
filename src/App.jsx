// App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import EnvironmentalDegradation from './components/EnvironmentalDegradation';
import SpeciesIdentification from './components/SpeciesIdentification';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/environmental-detection" element={<EnvironmentalDegradation />} />
          <Route path="/species-identification" element={<SpeciesIdentification />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
