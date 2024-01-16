import { useState } from 'react';
import confetti from 'canvas-confetti';
// componentes
import { Square } from './components/Square.jsx';
import { Board } from './components/Board.jsx';
import { WinnerModal } from './components/WinnerModal.jsx';
// constantes
import { TURNS } from './constants.js';
// funciones
import { checkWinner, checkEndGame } from './logic/board.js';

function App() {
  const [board, setBoard] = useState(Array(9).fill(null));

  // useState para saber quien tiene el turno
  const [turn, setTurn] = useState(TURNS.X);

  // useState para saber si hay ganador y quien es el ganador
  const [winner, setWinner] = useState(null); // null es q no hay ganador todavia, se sigue jugando; false es q hay empate, se completaron todos los cuadrados

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURNS.X);
    setWinner(null);
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
        <Board board={board} updateBoard={updateBoard} />
      </section>
      <section className='turn'>
        <Square isSelected={turn === TURNS.X} >
          {TURNS.X}
        </Square>

        <Square isSelected={turn === TURNS.O} >
          {TURNS.O}
        </Square>
      </section>
      <WinnerModal winner={winner} resetGame={resetGame}/>
    </main>
  )
}

export default App
