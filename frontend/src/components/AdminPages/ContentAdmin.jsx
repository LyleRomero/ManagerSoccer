import React, {useEffect, useState} from "react";
import { Link } from 'react-router-dom';
import "./Admin.css"
import { collection, addDoc, getDocs, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseContext/firebase";


function ContentAdmin() {

  const [showForm, setShowForm] = useState(false);
  const [tournamentName, setTournamentName] = useState('');
  const [numGroups, setNumGroups] = useState('');
  const [projects, setProjects] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Torneos"));
        const projectsData = [];
        querySnapshot.forEach((doc) => {
          projectsData.push({ id: doc.id, ...doc.data() });
        });
        setProjects(projectsData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchProjects();
  }, []);

  const handleAddProject = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setTournamentName('');
    setNumGroups('');
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]: value});
  };
  console.log(data);

  const handleAddTournament = async(e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Torneos"), {
        tournamentName: data.tournamentName,
        numGroups: data.numGroups,
        ...data,
      });
      const newProject = {
          id: docRef.id,
          tournamentName: data.tournamentName,
          numGroups: data.numGroups
        };
      setProjects([...projects, newProject]);
    } 
    catch(error) {
      console.log(error);
    }
    setShowForm(false);
    setTournamentName('');
    setNumGroups('');
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
          <div class="projects-section-header">
            <h1>Torneos</h1>
            <button className="agregar-btn" onClick={handleAddProject}>Agregar +</button>
          </div>
          <div class="project-boxes jsGridView" style={{"margin-top" : "20px" , "marginBottom" : "20px" }}>
            {projects.map((project, index) => ( 
              <div class="project-box-wrapper" style={{ "marginBottom" : "10px" , "marginRight" : "10px"}}>
                <div class="project-box">
                  <div class="project-box-header" style={{ "display" : "flex", "justifyContent" : "flex-end" , "border-bottom" : "2px solid #12B468"}}>
                    <div class="more-wrapper">
                      <button class="project-btn-more" onClick={() => handleDeleteProject(index)}>X</button>
                    </div>
                  </div>
                  <Link to="/dashboard/*" key={index}>
                    <div class="project-box-content-header">
                      <p class="box-content-header" style={{"fontSize" : "25px"}}>{project.tournamentName}</p>
                      <p class="box-content-header">Grupos: {project.numGroups}</p>
                    </div>
                  </ Link>
                </div>
              </div>
            ))}
          </div>
          {showForm && (
          <div className="form-popup">
            <form onSubmit={handleAddTournament} className="form-container-popup">
              <h2>Agregar Nuevo Torneo</h2>
              <input id="tournamentName" type="text" placeholder="Nombre del Torneo" onChange={handleInput} />
              <p>Cantidad de grupos: 
              <select id="numGroups" onChange={handleInput}>
                <option value="0"></option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="4">4</option>
                <option value="8">8</option>
              </select>
              </p>
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