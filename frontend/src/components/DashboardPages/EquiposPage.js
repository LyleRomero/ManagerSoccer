// EquiposPage.js
import React, { useState } from 'react';


function EquiposPage() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [equipos, setEquipos] = useState([]);
  const [nuevoEquipo, setNuevoEquipo] = useState('');

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoEquipo.trim() !== '') {
      setEquipos([...equipos, nuevoEquipo]);
      setNuevoEquipo('');
    }
  };

  const handleInputChange = (event) => {
    setNuevoEquipo(event.target.value);
  }

  /*Lista de quipos de ejemplo para mostrar */
  const teams = [
    "Equipo Dinamita",
    "Equipo Estrellitas",
    "Equipo Fantasmitas"
  ];

  const handleEditarEquipo = (index) => {
    const equipoEditado = teams[index];
    console.log(`Editando equipo: ${equipoEditado}`);
  };

  return (
    <div>
      <div className='equipos-header'>
        <h2>Equipos del torneo</h2>
          <button onClick={toggleFormulario} className="agregar-btn">Agregar +</button>
      </div>
      <div className='agregar-content'>
        {mostrarFormulario && (
              <div className="formulario-container">
                <h3>Agregar Equipo</h3>
                <form onSubmit={handleSubmit}>
                  <label htmlFor="nombreEquipo">Nombre del Equipo:</label>
                  <input type="text" id="nombreEquipo" />
                  <button type="submit">Aceptar</button>
                </form>
              </div>
            )}
      </div>
      <div className='equipos-lista'>
        <h3>Lista de Equipos</h3>
        <ul>
          {equipos.map((equipo, index) => (
            <li key={index}>{equipo}</li>
          ))}
        </ul>
      </div>
      <div className='equipos-lista'>
        <ul>
            {teams.map((teams, index) => (
              <li key={index}>
                {teams}
                <button onClick={() => handleEditarEquipo(index)}>Editar</button>
              </li>
            ))}
        </ul>  
      </div>
      
      {/* Aquí puedes agregar más contenido relacionado con los equipos */}
    </div>
  );
}

export default EquiposPage;