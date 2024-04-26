import React, {useEffect} from 'react';
import { Link } from 'react-router-dom';
import { app } from './firebase/firebaseContext/firebase';
import LoginUp from './LoginUp';
import Dashboard from './Dashboard';


function Home() {

  const [usuario, setUsuario] = React.useState(null);
    useEffect(() => {
      app.auth().onAuthStateChanged((usuarioFirebase) => {
        console.log("ya tienes sesión iniciada con:", usuarioFirebase);
        setUsuario(usuarioFirebase);
      });
    }, []);

  return (
    <>
      {usuario ? <Dashboard /> : <LoginUp setUsuario={setUsuario} />}
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
    </>
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