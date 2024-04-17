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

  const handleEditarEquipo = (equipo) => {
    console.log(`Editando equipo: ${equipo}`);
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
                  <button type="submit" className="agregar-btn">Aceptar</button>
                </form>
              </div>
            )}
      </div>
      <div className='equipos-lista'>
        <h3>Lista de Equipos</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nombre del Equipo</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {teams.map((equipo, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{equipo}</td>
                <td><button onClick={() => handleEditarEquipo(equipo)} className="agregar-btn">Editar</button></td>
              </tr>
            ))}
            {equipos.map((equipo, index) => (
              <tr key={index + teams.length}>
                <td>{index + teams.length + 1}</td>
                <td>{equipo}</td>
                <td><button onClick={() => handleEditarEquipo(equipo)} className="agregar-btn">Editar</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      {/* Aquí puedes agregar más contenido relacionado con los equipos */}
    </div>
  );
}

export default EquiposPage;