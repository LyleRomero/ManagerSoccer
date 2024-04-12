// EquiposPage.js
import React, { useState } from 'react';


function EquiposPage() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Lógica para manejar el envío del formulario aquí
  };

  return (
    <div>
      <h2>Equipos del torneo</h2>
      <button onClick={toggleFormulario} className="agregar-btn">Agregar +</button>
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
      {/* Aquí puedes agregar más contenido relacionado con los equipos */}
    </div>
  );
}

export default EquiposPage;