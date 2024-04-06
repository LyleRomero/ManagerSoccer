import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/SignUp';
import LoginUp from './components/LoginUp';

function App() {
  return (
    <div className='.app-container'> 
      <Router>
        <Routes>
          <Route path="/SignUp" element={<SignUp />} />
          <Route path="/loginup" element={<LoginUp />} />
          {/* Otras rutas */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
