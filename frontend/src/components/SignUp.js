import React, { useState } from 'react';
import { Link } from 'react-router-dom';
/*import firebase from 'firebase/app';
import 'firebase/auth';*/

function SignUp() {
  const [formData, setFormData] = useState({
    username: '',
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
    // Aquí puedes agregar la lógica para enviar los datos de registro al servidor
    console.log('Formulario enviado:', formData);
  };

  return (
    <div>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Nombre de usuario:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
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
        <button type="submit">Registrarse</button>
        <p>¿Ya tienes una cuenta? <Link to="/loginup">Ingresa</Link></p>
      </form>
    </div>
  );
}

export default SignUp;