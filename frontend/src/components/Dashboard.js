import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Sidebar from './Sidebar'
import Inicio from './DashboardPages/Inicio';
import EquiposPage from './DashboardPages/EquiposPage';
import PlantillaPage from './DashboardPages/PlantillaPage'
import { app } from './firebase/firebaseContext/firebase';

import '../App.css';

function Dashboard() {
  
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div className="dashboard-container">
      <Sidebar />
      <div className='dashboard-content'>
        <div className='dashboard-title'>
          <h1>Dashboard</h1>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
        <Routes>
          <Route path="inicio" element={<Inicio />} />
          <Route path="Equipos" element={<EquiposPage />} />
          <Route path="plantilla" element={<PlantillaPage />} />
        </Routes>
      </div>
    </div>
    
  );
}

export default Dashboard;
