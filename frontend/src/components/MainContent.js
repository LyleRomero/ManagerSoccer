// MainContent.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import EquiposPage from './DashboardPages/EquiposPage'; // Importa tu componente de equipos
import PlantillaPages from './DashboardPages/PlantillaPage';

function MainContent() {
  return (
    <div className="main-content">
      <Routes>
        <Route path="/dashboard/equipos" element={<EquiposPage />} />
        <Route path="/dashboard/equipos" element={<EquiposPage />} />
        <Route path="/dashboard/plantilla" element={<PlantillaPages />} />
        <Route path="/dashboard" element={<h1>Configuración</h1>} />
        {/* Otras rutas */}
      </Routes>
    </div>
  );
}

export default MainContent;

