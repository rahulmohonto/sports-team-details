import logo from './images/auction.jpg';
import headerlogo from './images/selection.png';
import './App.css';
import { useState, useEffect } from 'react';
import PlayerData from './components/Players-Data/Player-Data.json';
import Players from './components/Players/Players.js';
import AddedPlayer from './components/AddedPlayer/AddedPlayer.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


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
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={headerlogo} alt=""></img>
        <h4 className="text-warning mt-3"> Available Players : {PlayerData.length}</h4>
        <h5 className="text-warning">Player Selected : {addedPlayer.length}</h5>
        <AddedPlayer className="mb-6" selectedPlayer={addedPlayer}></AddedPlayer>
        {
          player.map(player =>
            <Players playerEle={player} handleAddedPlayer={handleAddPlayer}></Players>)
        }

      </header>
    </div >
  );
}

export default App;
