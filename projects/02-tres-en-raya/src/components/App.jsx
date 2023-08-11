// Modules
import { useState } from "react";
import confetti from "canvas-confetti";
// Components
import Square from "./Square.jsx";
import Modal from "./Modal.jsx";
import CheckWinner from "../utils/checkWinner.js";
import CheckEndGame from "../utils/checkEndGame.js";
// Utils
import { TURN } from "../utils/constants.js";
// Assets
import '../assets/styles/App.css'
import { ResetGame, SaveGame } from "../utils/storage.js";

function App() {
  const [board, setBoard] = useState(() => {
    const boardFromLocalStorage = window.localStorage.getItem('board');
    if (boardFromLocalStorage) return JSON.parse(boardFromLocalStorage);
    return Array(9).fill(null);
  });
  const [turn, setTurn] = useState(() => {
    const turnFromLocalStorage = window.localStorage.getItem('turn');
    return turnFromLocalStorage ?? TURN.X;
  });
  const [winner, setWinner] = useState(null);

  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);

    const newTurn = turn === TURN.X ? TURN.O : TURN.X;
    setTurn(newTurn)

    SaveGame({
      board: newBoard,
      turn: newTurn
    })

    const newWinner = CheckWinner(newBoard);
    if (newWinner) {
      setWinner(newWinner);
      confetti();
    } else if (CheckEndGame(newBoard)) {
      setWinner(false);
    }
  }

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setTurn(TURN.X);
    setWinner(null);

    ResetGame();
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
      <section className='board'>
        {
          board.map((_, index) => (
            <Square
              key={index}
              index={index}
              updateBoard={updateBoard}
            >
              {board[index]}
            </Square>
          ))
        }
      </section>
      <section className="turn">
        <Square isSelected={turn === TURN.X}>
          {TURN.X}
        </Square>
        <Square isSelected={turn === TURN.O}>
          {TURN.O}
        </Square>
      </section>
      {
        winner !== null && (
          <Modal winner={winner} resetGame={resetGame} />
        )
      }
    </>
  )
}

export default App
