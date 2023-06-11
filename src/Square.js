const Square = ({value, index}) => {
    const {turn, setTurn, play, setPlay, game, setGame} = value;

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


    const handleClick = () =>{
        if(play[index] === null && !game){
            if(turn === "X"){
                let temp = play;
                temp[index] = "X";
                setPlay(temp);
                checkWinner("X");
                setTurn("O");
            }
            else  {
                let temp = play;
                temp[index] = "O";
                setPlay(temp);
                checkWinner("O");
                setTurn("X");
            }
                
        }
    }

  return (
    <button className='square' onClick={handleClick}>{play[index]}</button>
  )
}

export default Square