import React, {useEffect} from "react";
import { signOut } from "firebase/auth"
import { auth } from "./firebase/firebaseContext/firebase";
import { useNavigate } from "react-router-dom";
import "./AdminPages/Admin.css"

function NavBar() {

  const navigate = useNavigate();

  const cerrarSesion = () => {
    signOut(auth).then(() => {
      navigate("/login");
      // Sign-out successful.
    }).catch((error) => {
  // An error happened.
    });
  };

  return (
      <div class="app-header">
        <div class="app-header-left">
          <span class="app-icon"></span>
          <p class="app-name">GolMin</p>
          <button onClick={cerrarSesion}>Cerrar Sesión</button>
        </div>
        <div class="app-header-right">
          <button class="notification-btn">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
              <path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
          </button>
          <button class="profile-btn">
            <img src={"iconPro.svg"} />
            <span>Administrador #001</span>
          </button>
        </div>
      </div>
  );
}

export default NavBar;

/* https://codepen.io/aybukeceylan/pen/OJRNbZp*/
