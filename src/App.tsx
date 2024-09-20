import React from 'react';
import './App.css';
import ServiceProviderDashboard from './components/ServiceProviderDashboard';
import MainDashboard from './components/MainDashboard';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<ServiceProviderDashboard />} />
          <Route path="/main_dashboard" element={<MainDashboard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
