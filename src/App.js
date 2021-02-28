import logo from './images/auction.jpg';
import headerlogo from './images/selection.png';
import './App.css';
import { useState, useEffect } from 'react';
import PlayerData from './components/Players-Data/Player-Data.json';
import Players from './components/Players/Players.js';
import AddedPlayer from './components/AddedPlayer/AddedPlayer.js';


function App() {

  const [player, setPlayer] = useState([])
  const [addedPlayer, setAddedPlayer] = useState([])
  useEffect(() => {
    setPlayer(PlayerData)

    // console.log(player)
  }, [])

  const handleAddPlayer = (player) => {
    const newPlayer = [...addedPlayer, player]
    setAddedPlayer(newPlayer);
    const getsome = document.getElementById('but')
    getsome.innerText = 'Hired';
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={headerlogo}></img>
        <h4> Available Players : {PlayerData.length}</h4>
        <h5>Player Selected : {addedPlayer.length}</h5>
        <AddedPlayer selectedPlayer={addedPlayer}></AddedPlayer>
        {
          player.map(player =>
            <Players playerEle={player} handleAddedPlayer={handleAddPlayer}></Players>)
        }

      </header>
    </div >
  );
}

export default App;
