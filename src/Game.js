import {useState } from 'react';
import Square from './Square';

const Game = () => {
  const [turn, setTurn] = useState("X");

  const [play, setPlay] = useState([null,null,null,null,null,null,null,null,null]);
  
  const [game,setGame] = useState(null);

  const resetGame =()=>{
    setGame(null);
    setPlay([null,null,null,null,null,null,null,null,null]);
  }

  
  return (
    <div>

    <div className='result'>
    {game ? (game === "Draw" ? <h1>Draw</h1> : <h1>Winner - {game}</h1>) : <h1>Turn - {turn}</h1>}
    </div>

    <div className="screen">
    <div className="gamezone">
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={0}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={1}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={2}/>

      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={3}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={4}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={5}/>

      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={6}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={7}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame}} index={8}/>

    </div>
    </div>

    <div  className='reset'>
    {game && <button className='resetBtn' onClick={resetGame}>Restart Game</button>}
    </div>

    </div>
    
  )
}

export default Game