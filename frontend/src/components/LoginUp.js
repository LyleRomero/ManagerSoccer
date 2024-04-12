import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFutbol } from '@fortawesome/free-solid-svg-icons';

function LoginUp() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar los datos de inicio de sesión al servidor
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <h1>Soccer Manager
        <FontAwesomeIcon icon={faFutbol} style={{ marginLeft: '5px' }} />
      </h1>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Correo electrónico:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <button type="button" className="toggle-password-button" onClick={handleTogglePassword}>
            {showPassword ? "O" : "I"}
          </button>
        </div>
        <button type="submit">Iniciar Sesión</button>
        <p>¿No tienes una cuenta? <Link to="/signUp">Registrarse</Link></p>
      </form>
    </div>
  );
}

export default LoginUp;