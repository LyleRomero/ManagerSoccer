import React from 'react';
import NavBar from "./NavBar";
import '../App.css';
import ContentAdmin from './AdminPages/ContentAdmin';

function Administrador() {

  return (
    <div>
      <NavBar />
      <div>
        <ContentAdmin />  
      </div>
    </div>
    
  );
}

export default Administrador;