import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar'
import Jugadores from './DashboardPages/Jugadores';
import EquiposPage from './DashboardPages/EquiposPage';
import Estadisticas from './DashboardPages/Estadisticas'
import '../App.css';

function Dashboard() {

  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <Sidebar />
        <div className='dashboard-content'>
          <Routes>
            <Route path="equipos" element={<EquiposPage />} />
            <Route path="jugadores" element={<Jugadores />} />
            <Route path="estadisticas" element={<Estadisticas />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
