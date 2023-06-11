const Square = ({value, index}) => {
    const {turn, setTurn, play, setPlay, game, setGame} = value;


    const handleClick = () =>{
        if(play[index] === null && !game){
            if(turn === "X"){
                let temp = play;
                temp[index] = "X";
                setPlay(temp);

                if(temp[0] === "X" && temp[1] === "X"&&temp[2] === "X")
                    setGame("X");
                else if(temp[3] === "X" && temp[4] === "X"&&temp[5] === "X")
                    setGame("X");
                else if(temp[6] === "X" && temp[7] === "X"&&temp[8] === "X")
                    setGame("X");
                else if(temp[0] === "X" && temp[3] === "X"&&temp[6] === "X")
                    setGame("X");
                else if(temp[1] === "X" && temp[4] === "X"&&temp[7] === "X")
                    setGame("X");
                else if(temp[2] === "X" && temp[5] === "X"&&temp[8] === "X")
                    setGame("X");
                else if(temp[0] === "X" && temp[4] === "X"&&temp[8] === "X")
                    setGame("X");
                else if(temp[2] === "X" && temp[5] === "X"&&temp[6] === "X")
                    setGame("X");

 
                setTurn("O");
            }
            else  {
                let temp = play;
                temp[index] = "O";
                setPlay(temp);

                if(temp[0] === "O" && temp[1] === "O"&&temp[2] === "O")
                    setGame("O");
                else if(temp[3] === "O" && temp[4] === "O"&&temp[5] === "O")
                    setGame("O");
                else if(temp[6] === "O" && temp[7] === "O"&&temp[8] === "O")
                    setGame("O");
                else if(temp[0] === "O" && temp[3] === "O"&&temp[6] === "O")
                    setGame("O");
                else if(temp[1] === "O" && temp[4] === "O"&&temp[7] === "O")
                    setGame("O");
                else if(temp[2] === "O" && temp[5] === "O"&&temp[8] === "O")
                    setGame("O");
                else if(temp[0] === "O" && temp[4] === "O"&&temp[8] === "O")
                    setGame("O");
                else if(temp[2] === "O" && temp[5] === "O"&&temp[6] === "O")
                    setGame("O");
                setTurn("X");
            }
                
        }
    }

  return (
    <button type="button" className='square' onClick={handleClick}>{play[index]}</button>
  )
}

export default Square