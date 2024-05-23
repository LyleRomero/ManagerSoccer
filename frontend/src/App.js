import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './components/Home'
import LoginUp from './components/LoginUp';
import Dashboard from './components/Dashboard';
import Administrador from './components/Administrador';
import { AuthContext } from './components/Contexts/authContext';

function App() {

  const {currentUser} = useContext(AuthContext);
  console.log("USUARIO EN APP (App component):", currentUser);

  const RequireAuth = ({ children }) => {
    console.log("USUARIO EN APP (RequireAuth):", currentUser);
    return currentUser ? children : <Navigate to="/login" />;
  };

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<LoginUp />} />
          <Route path='/admin/*' element={
            <RequireAuth>
              <Administrador />
            </RequireAuth>}/>
          <Route path="/dashboard/*" element={<Dashboard />}/>
        </Routes>
      </Router>
  );
}

export default App;
