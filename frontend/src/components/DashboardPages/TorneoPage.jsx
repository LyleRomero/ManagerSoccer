// TorneoPage.js
import React, { useEffect, useState } from 'react';
import { collection, addDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseContext/firebase";
import './Dashboard.css'



function TorneoPage() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [equipos, setEquipos] = useState([]);
  const [nuevoEquipo, setNuevoEquipo] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [teamName, setTeamName] = useState('');
  const [selGroups, setSelGroups] = useState('');
  const [teams, setTeam] = useState([]);
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [data, setData] = useState({});
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentGroups, setTournamentGroups] = useState('');

  useEffect(() => {
    const fetchEquipo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Equipos"));
        const teamData = [];
        querySnapshot.forEach((doc) => {
            teamData.push({ id: doc.id, ...doc.data() });
        });
        setTeam(teamData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchEquipo();
  }, []);
  
  useEffect(() => {
    const fetchdData = async() => {    
        const docRef = doc(db, "Torneos", "Np46YczrQyYdfZMslAbn" );
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setTournamentName(docSnap.data().tournamentName);
        setTournamentGroups(parseInt(docSnap.data().numGroups, 10));
        } else {
        // docSnap.data() will be undefined in this case
        console.log("No such document!");
        }
    }
    fetchdData();
  },[]);
    

  const generateGroupOptions = (numGroups) => {
    const options = [];
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < numGroups; i++) {
        console.log("iteracion",i);
      options.push(
        <option key={i} value={alphabet[i]}>
          {alphabet[i]}
        </option>
      );
    }
    return options;
  };

  const toggleFormulario = () => {
    setMostrarFormulario(!mostrarFormulario);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nuevoEquipo.trim() !== '') {
      setEquipos([...equipos, nuevoEquipo]);
      setNuevoEquipo('');
    }
  };

  const handleInputChange = (event) => {
    setNuevoEquipo(event.target.value);
  }

  const handleFormAddTeam = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setTeamName('');
    setSelGroups('');
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]: value});
  };
  console.log(data);

  const handleAddTeamDb = async(e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Equipos"), {
        teamName: data.teamName,
        selGroups: data.selGroups,
        ...data,
      });
      const newTeams = {
          id: docRef.id,
          teamName: data.teamName,
          selGroups: data.selGroups
        };
      setTeam([...teams, newTeams]);
    } 
    catch(error) {
      console.log(error);
    }
    setShowForm(false);
    setTeamName('');
    setSelGroups('');
  };

  /*Lista de quipos de ejemplo para mostrar */

  const handleEditarEquipo = (equipo) => {
    console.log(`Editando equipo: ${equipo}`);
  };

  return (
    <div>
      <div className='equipos-header'>
        <h2>{tournamentName}</h2>
          <button className="agregar-btn" onClick={handleFormAddTeam}>Agregar +</button>
      </div>
      <div className='equipos-lista'>
        <h3>Lista de Equipos</h3>
        <div className='groups-section'>
          <div className='group-boxes jsGridView' style={{"margin-top" : "20px" , "marginBottom" : "20px" }}>
            <div clasName='group-box-wrapper'>
              <div clasName='group-box'>
                <table>
                  <thead>
                    <h2>Grupo {selGroups}</h2>
                    <tr>
                      <th>#</th>
                      <th>Nombre del Equipo</th>
                      <th>Grupo</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teams.map((team, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{team.teamName}</td>
                        <td>{team.selGroups}</td>
                        <td><button onClick={() => handleEditarEquipo(team)} className="agregar-btn">Editar</button></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div> 
            </div>
          </div>
        </div>
      </div>
      {showForm && (
          <div className="form-popup">
            <form className="form-container-popup" onSubmit={handleAddTeamDb}> 
              <h2>Agregar Nuevo Equipo</h2>
              <input id="teamName" type="text" placeholder="Nombre del Equipo" onChange={handleInput}/>
              <p>Cantidad de grupos: 
              <select id="selGroups" onChange={handleInput}>
                <option value=" "></option>
                {generateGroupOptions(tournamentGroups)}
              </select>
              </p>
              <div className="button-group">
                <button type="button" className="cancel-button" onClick={handleCancel}>Cancelar</button>
                <button type="submit" className="submit-button">Aceptar</button>
              </div>
            </form>
          </div>
      )}
      {/* Aquí puedes agregar más contenido relacionado con los equipos */}
    </div>
  );
}

export default TorneoPage;