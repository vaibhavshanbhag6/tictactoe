import {useEffect, useState } from 'react';
import Square from './Square';

const Game = () => {
  const [turn, setTurn] = useState("X");

  const [play, setPlay] = useState([null,null,null,null,null,null,null,null,null]);
  
  const [game,setGame] = useState(null);

  useEffect(()=>{

    if(turn === "O" && !game){
      generateOPlay();
    }
    // eslint-disable-next-line
  },[turn,play])

  const generateOPlay = () =>{

    setTimeout(()=>{
      do{
        var rand = Math.floor(Math.random()*10);
      }while(play[rand]!==null);

      let temp = play;
      temp[rand] = "O";
      setPlay(temp);
      checkWinner("O");
      setTurn("X");
      console.log(rand,play);
    },1000)
    
  }

  const resetGame =()=>{
    setGame(null);
    setPlay([null,null,null,null,null,null,null,null,null]);
  }

  const checkWinner = (player) =>{
    if(play[0] === player && play[1] === player && play[2] === player)
        setGame(player);
    else if(play[3] === player && play[4] === player && play[5] === player)
        setGame(player);
    else if(play[6] === player && play[7] === player && play[8] === player)
        setGame(player);
    else if(play[0] === player && play[3] === player && play[6] === player)
        setGame(player);
    else if(play[1] === player && play[4] === player && play[7] === player)
        setGame(player);
    else if(play[2] === player && play[5] === player && play[8] === player)
        setGame(player);
    else if(play[0] === player && play[4] === player && play[8] === player)
        setGame(player);
    else if(play[2] === player && play[4] === player && play[6] === player)
        setGame(player);
    else if(!play.includes(null))
        setGame("Draw");
}

  
  return (
    <div>

    <div className='result'>
    {game ? (game === "Draw" ? <h1>Draw</h1> : <h1>Winner - {game}</h1>) : <h1>{turn} Turn</h1>}
    </div>

    <div className="screen">
    <div className="gamezone">
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={0}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={1}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={2}/>

      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={3}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={4}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={5}/>

      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={6}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={7}/>
      <Square value={{turn, setTurn, play, setPlay, game, setGame, checkWinner}} index={8}/>

    </div>
    </div>

    <div  className='reset'>
    {game && <button className='resetBtn' onClick={resetGame}>Restart Game</button>}
    </div>

    </div>
    
  )
}

export default Game