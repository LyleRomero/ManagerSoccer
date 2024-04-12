import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <h2>Menú</h2>
      </div>
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard/inicio">Inicio</Link>
        </li>
        <li>
          <Link to="/dashboard/equipos">Equipos</Link>
        </li>
        <li>
          <Link to="/dashboard/plantilla">Plantillas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

