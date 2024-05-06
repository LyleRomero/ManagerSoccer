import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from "./AdminPages/NavBar";
import { app } from './firebase/firebaseContext/firebase';
import '../App.css';
import ContentAdmin from './AdminPages/ContentAdmin';

function Administrador() {
  
  const cerrarSesion = () => {
    app.auth().signOut();
  };

  return (
    <div>
      <Navbar />
      <div>
        <ContentAdmin />  
      </div>
    </div>
    
  );
}

export default Administrador;