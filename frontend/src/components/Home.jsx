import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';


function Home() {

  return (
      <div className="home-container">
        <h1 className="home-title">Bienvenido a la Plataforma Web</h1>
        <div className="button-container">
          <div className="button-box">
            <Link to="/login" className="home-button">Iniciar sesión</Link>
          </div>
          <div className="button-box">
            <Link to="/signup" className="home-button">Registrarse</Link>
          </div>
          <div className="button-box">
            <Link to="/dashboard" className="home-button">Dashboard</Link>
          </div>
        </div>
      </div>
  );
}

export default Home;

/*
import React from 'react'
import { AuthProvider } from './Contexts/authContext/AuthContexts'

function Home() {
    return (
      <AuthProvider>
        <div>
          <h1>HOME home HOME</h1>
        </div>  
      </AuthProvider>
    )
}

export default Home;*/