const Square = ({value, index}) => {
    const {turn, setTurn, play, setPlay, game, checkWinner} = value;

    const handleClick = () =>{
        if(turn ==="X" && play[index] === null && !game){
                let temp = play;
                temp[index] = "X";
                setPlay(temp);
                checkWinner("X");
                setTurn("O");
        }
    }

  return (
    <button className='square' onClick={handleClick}>{play[index]}</button>
  )
}

export default Square