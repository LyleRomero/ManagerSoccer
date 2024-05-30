import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import NavBar from './NavBar';
import Sidebar from './Sidebar'
import TorneoPage from './DashboardPages/TorneoPage';
import EquiposPage from './DashboardPages/EquiposPage';
import JugadoresPage from './DashboardPages/JugadoresPage';
import PartidosPage from './DashboardPages/PartidosPage';
import EliminatoriasPage from './DashboardPages/EliminatoriasPage';
import EstadisticasPage from './DashboardPages/EstadisticasPage';

import '../App.css';

function Dashboard() {

  return (
    <div>
      <NavBar />
      <div className="dashboard-container">
        <Sidebar />
        <div className='dashboard-content'>
          <Routes>
            <Route path="torneo" element={<TorneoPage />} />
            <Route path="equipos" element={<EquiposPage />} />
            <Route path="jugadores" element={<JugadoresPage />} />
            <Route path="partidos" element={<PartidosPage />} />
            <Route path="eliminatorias" element={<EliminatoriasPage />} />
            <Route path="estadisticas" element={<EstadisticasPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
