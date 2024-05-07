import React, {useEffect , useState} from "react";
import { app } from "../firebase/firebaseContext/firebase";
import { Link } from 'react-router-dom';
import "./Admin.css"
import Dashboard from "../Dashboard";


function ContentAdmin() {

  const [showForm, setShowForm] = useState(false);
  const [tournamentName, setTournamentName] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleAddProject = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setTournamentName('');
  };

  const handleSubmit = () => {
    setProjects([...projects, tournamentName]);
    setShowForm(false);
    setTournamentName('');
  };

  
  const handleDeleteProject = (index) => {
    setSelectedProjectIndex(index);
    setShowConfirmation(true);
  };

  const confirmDeleteProject = () => {
    projects.splice(selectedProjectIndex, 1);
    setProjects([...projects]);
    setShowConfirmation(false);
  };

    return (
      <div class="app-content">
        <div class="projects-section">
          <div class="projects-section-header" style={{"margin-bottom" : "20px" , "display": "flex" , "justify-content" : "space-between"}}>
            <h1>Torneos</h1>
            <button className="agregar-btn" onClick={handleAddProject}>Agregar +</button>
          </div>
          <div class="project-boxes jsGridView" style={{"margin-top" : "20px" , "marginBottom" : "20px" }}>
            {projects.map((project, index) => (
              <div class="project-box-wrapper" style={{ "marginBottom" : "10px" , "marginRight" : "10px"}}>
                <div class="project-box">
                  <div class="project-box-header" style={{ "display" : "flex", "justifyContent" : "flex-end" }}>
                    <div class="more-wrapper">
                      <button class="project-btn-more" onClick={() => handleDeleteProject(index)}>X</button>
                    </div>
                  </div>
                  <Link to="/dashboard/*" key={index}>
                    <div class="project-box-content-header">
                      <p class="box-content-header">{project}</p>
                    </div>
                  </ Link>
                </div>
              </div>
            ))}
          </div>
          {showForm && (
          <div className="form-popup">
            <form onSubmit={handleSubmit} className="form-container-popup">
              <h2>Agregar Nuevo Torneo</h2>
              <input type="text" placeholder="Nombre del Torneo" value={tournamentName} onChange={(e) => setTournamentName(e.target.value)} />
              <div className="button-group">
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="submit-button">Aceptar</button>
              </div>
            </form>
          </div>
          )}
          {showConfirmation && (
          <div className="form-popup">
            <div className="form-container-popup">
              <p>¿Estás seguro de que deseas eliminar este Torneo?</p>
              <div className="button-group">
                <button className="cancel-button" onClick={() => setShowConfirmation(false)}>Cancelar</button>
                <button className="delete-button" onClick={confirmDeleteProject}>Eliminar</button>
              </div>
            </div>
          </div>
          )}
        </div>
      </div>
    );
  };

export default ContentAdmin;