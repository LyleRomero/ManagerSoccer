import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home'
import SignUp from './components/SignUp';
import LoginUp from './components/LoginUp';
import Dashboard from './components/Dashboard';
import Administrador from './components/Administrador';

function App() {

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<LoginUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path='/Admin/*' element={<Administrador />}/>
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </Router>
  );
}

export default App;
