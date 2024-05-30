import React from 'react';
import { Link } from 'react-router-dom';
import "../App.css"


function Sidebar() {

  return (
    <div className="sidebar">
      <ul className="sidebar-menu">
        <li>
          <Link to="/dashboard/torneo">Torneo</Link>
        </li>
        <li>
          <Link to="/dashboard/equipos">Equipos</Link>
        </li>
        <li>
          <Link to="/dashboard/jugadores">Jugadores</Link>
        </li>
        <li>
          <Link to="/dashboard/partidos">Partidos</Link>
        </li>
        <li>
          <Link to="/dashboard/eliminatorias">Eliminatorias</Link>
        </li>
        <li>
          <Link to="/dashboard/estadisticas">Estadisticas</Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;

