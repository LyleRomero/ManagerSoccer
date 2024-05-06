import React, {useEffect} from "react";
import { app } from "../firebase/firebaseContext/firebase";
import "./Admin.css"

function ContentAdmin() {
    return (
      <div class="app-content">
        <div class="projects-section">
          <div class="projects-section-header" style={{"margin-bottom" : "20px" , "display": "flex" , "justify-content" : "space-between"}}>
            <h1>Torneos</h1>
            <button className="agregar-btn">Agregar +</button>
          </div>
          <div class="project-boxes jsGridView" style={{"margin-top" : "20px"}}>
            <div class="project-box-wrapper">
              <div class="project-box" style={{ backgroundColor: "#fee4cb" }}>
                <div class="project-box-header" style={{"display": "flex" , "justify-content" : "space-between"}}>
                  <span style={{ marginRight: 'auto' }}>Fecha 00/00/00</span>
                  <div class="more-wrapper">
                    <button class="project-btn-more">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-more-vertical">
                        <circle cx="12" cy="12" r="1" />
                        <circle cx="12" cy="5" r="1" />
                        <circle cx="12" cy="19" r="1" /></svg>
                    </button>
                  </div>
                </div>
                <div class="project-box-content-header">
                  <p class="box-content-header">Torneo #1</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  };

export default ContentAdmin;