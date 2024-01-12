import { useState } from 'react';
import confetti from 'canvas-confetti';

const TURNS = {
  X: 'x',
  O: 'o'
}

const Square = ({children, updateBoard, isSelected, index}) => {
  const className = `square ${isSelected ? 'is-selected' : ''}`;
  const handleClick = () =>{
    updateBoard(index);
  };

  return(
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  )
}

const WINNER_COMBOS = [
  // jugadas horizontales
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  // jugadas verticales
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  // jugadas diagonales
  [0, 4, 8],
  [2, 4, 6]
]

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  // useState para saber quien tiene el turno
  const [turn, setTurn] = useState(TURNS.X);

  // useState para saber si hay ganador y quien es el ganador
  const [winner, setWinner] = useState(null); // null es q no hay ganador todavia, se sigue jugando; false es q hay empate, se completaron todos los cuadrados

  const checkWinner = (boardToCheck) =>{
    for(const combo of WINNER_COMBOS){
      const [a, b, c] = combo; // a, b y c son indices, q van a servir para evaluar las posiciones de boardToCheck, o sea 'newBoard'
      if(
        boardToCheck[a] && // si en la posicion a tiene algo diferente a null
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[a] === boardToCheck[c]
      ){
        // devolver ganador
        return boardToCheck[a];
      }
    }
    // devolver si no hay ganador todavia
    return null;
  }
  
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
  }

  const checkEndGame = (newBoard) =>{
    return newBoard.every((square) => square !== null);
  }

  // actualizar tablero
  const updateBoard = (index) => {
    // no actualizar si el array ya tiene un turno guardado
    if(board[index] || winner) return;

    // actualizar tablero; actualizar cada div square con el valor del turno
    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    // cambiar turno
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);

    // checkear si hay ganador
    const newWinner = checkWinner(newBoard);
    if(newWinner){
      confetti();
      setWinner(newWinner);
      console.log(winner);
    }
    //chekear si hubo empate
    else if(checkEndGame(newBoard)){
      setWinner(false);
    }
  }
  
  return (
    <main className="board">
      <h1>Hello Tic Tac Toe!</h1>
      <button onClick={resetGame}>Reset Game</button>
      <section className="game">
        {
          board.map((_, index) => {
            return(
              <Square 
                key={index}
                index={index}
                updateBoard={updateBoard}
              >
                {board[index]}
              </Square>
            );
          })
        }
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>
      {
        winner !== null && (
          <section className='winner'>
            <div className='text'>
              <h2>
                {
                  winner === false ? 'Empate' : 'Gano: '
                }
              </h2>
              <header className='win'>
                {winner && <Square>{winner}</Square>}
              </header>

              <footer>
                <button onClick={resetGame}>
                  Empezar de nuevo
                </button>
              </footer>
            </div>
          </section>
        )
      }
    </main>
  )
}

export default App
