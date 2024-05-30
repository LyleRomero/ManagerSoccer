// JugadoresPage.js
import React, { useEffect, useState } from 'react';
import { collection, addDoc, doc, getDocs, getDoc, deleteDoc } from "firebase/firestore";
import { db } from "../firebase/firebaseContext/firebase";
import './Dashboard.css'



function JugadoresPage() {

  const [mostrarFormulario, setMostrarFormulario] = useState(false);
  const [players, setPlayers] = useState([]);
  const [nuevoEquipo, setNuevoEquipo] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [playerName, setPlayerName] = useState('');
  const [playerLastName, setPlayerLastName] = useState('');
  const [playerTeam, setPlayerTeam] = useState('');
  const [playerID, setPlayerID] = useState('');
  const [playerBirth, setPlayerBirth] = useState('');
  const [playerCel, setPlayerCel] = useState('');
  const [playerRH, setPlayerRH] = useState('');
  const [selGroups, setSelGroups] = useState('');
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [data, setData] = useState({});
  const [tournamentName, setTournamentName] = useState('');
  const [tournamentGroups, setTournamentGroups] = useState('');

  useEffect(() => {
    const fetchEquipo = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Jugadores"));
        const teamData = [];
        querySnapshot.forEach((doc) => {
            teamData.push({ id: doc.id, ...doc.data() });
        });
        setPlayers(teamData);
      } catch (error) {
        console.log("Error getting documents: ", error);
      }
    };
    fetchEquipo();
  }, []);
  

  const handleInputChange = (event) => {
    setNuevoEquipo(event.target.value);
  }

  const handleFormAddPlayer = () => {
    setShowForm(true);
  };

  const handleCancel = () => {
    setShowForm(false);
    setPlayerName('');
    setPlayerLastName('');
    setPlayerTeam('');
    setPlayerID('');
    setPlayerBirth('');
    setPlayerCel('');
    setPlayerRH('');    
  };

  const handleInput = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({...data, [id]: value});
  };
  console.log(data);

  const handleAddPlayerDb = async(e) => {
    e.preventDefault();
    try {
      const docRef = await addDoc(collection(db, "Jugadores"), {
        playerName: data.playerName,
        playerLastName: data.playerLastName,
        playerTeam: data.playerTeam,
        PlayerID: data.PlayerID,
        PlayerBirth: data.playerBirth,
        PlayerCel: data.PlayerCel,
        PlayerRH: data.PlayerRH,  
        ...data,
      });
      const newPlayers = {
          id: docRef.id,
          playerName: data.playerName,
          playerLastName: data.playerLastName,
          playerTeam: data.playerTeam,
          playerID: data.playerID,
          playerBirth: data.playerBirth,
          playerCel: data.playerCel,
          playerRH: data.playerRH,
        };
      setPlayers([...players, newPlayers]);
    } 
    catch(error) {
      console.log(error);
    }
    setShowForm(false);
    setPlayerName('');
    setPlayerLastName('');
    setPlayerTeam('');
    setPlayerID('');
    setPlayerBirth('');
    setPlayerCel('');
    setPlayerRH(''); 
  };

  const handleEditarEquipo = (equipo) => {
    console.log(`Editando equipo: ${equipo}`);
  };

  return (
    <div>
      <div className='equipos-header'>
        <h2>{tournamentName}</h2>
          <button className="agregar-btn" onClick={handleFormAddPlayer}>Agregar +</button>
      </div>
      <div className='equipos-lista'>
        <h3>Lista de Jugadores</h3>
        <div className='groups-section'>
          <div className='group-boxes jsGridView' style={{"margin-top" : "20px" , "marginBottom" : "20px" }}>
            <div clasName='group-box-wrapper'>
              <div clasName='group-box'>
                <table>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Equipo</th>
                      <th>ID</th>
                      <th>F. Nacimiento</th>
                      <th>Telefono</th>
                      <th>R.H</th>
                      <th>ver</th>
                    </tr>
                  </thead>
                  <tbody>
                    {players.map((player, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{player.playerName}</td>
                        <td>{player.playerLastName}</td>
                        <td>{player.playerTeam}</td>
                        <td>{player.playerID}</td>
                        <td>{player.playerBirth}</td>
                        <td>{player.playerCel}</td>
                        <td>{player.playerRH}</td>
                        <td><button onClick={() => handleEditarEquipo(player)} className="agregar-btn">Editar</button></td>
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
            <form className="form-container-popup" onSubmit={handleAddPlayerDb}> 
              <h2>Agregar Nuevo Jugador</h2>
              <input id="playerName" type="text" placeholder="Nombre" onChange={handleInput}/>
              <input id="playerLastName" type="text" placeholder="Apellido" onChange={handleInput}/>
              <p>Equipo: 
              <select id="playerTeam" onChange={handleInput}>
                <option value=""></option>
                <option value="Millonarios">Millonarios</option>
                <option value="Nacional">Nacional</option>
                <option value="America">America</option>                
              </select>
              </p>
              <input id="playerID" type="text" placeholder="Identificacion" onChange={handleInput}/>
              <input id="playerBirth" type="text" placeholder="F. Nacimiento Opcion" onChange={handleInput}/>
              <input id="playerCel" type="text" placeholder="Telefono" onChange={handleInput}/>
              <p>Rh: 
              <select id="playerRH" onChange={handleInput}>
                <option value=""></option>
                <option value="O">O+</option>
                <option value="O">O-</option>
                <option value="AB">AB</option>                
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

export default JugadoresPage;