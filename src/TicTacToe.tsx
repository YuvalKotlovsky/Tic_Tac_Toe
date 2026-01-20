import "./App.css";
import "./TicTacToe.css";
import { useState } from "react";

// Board is a 1D array of 9 cells, each can be 'X', 'O', or null
type Cell = "X" | "O" | null;
type Board = Cell[];

type GameResult = {
  winner: Cell;
  line: number[];
} | null;

const WIN_PATTERNS: number[][] = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

function getWinner(board: Board): GameResult {
  for (const pattern of WIN_PATTERNS) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: pattern };
    }
  }
  return null;
}

function TicTacToe() {
  const [board, setBoard] = useState<Board>(Array(9).fill(null));
  const [turn, setTurn] = useState<Cell>("X");
  const result = getWinner(board);
  const isFull = board.every((cell) => cell !== null);
  const isDraw = !result && isFull;

  function handleCellClick(idx: number) {
    if (board[idx] || result) return;
    const next = board.slice();
    next[idx] = turn;
    setBoard(next);
    setTurn(turn === "X" ? "O" : "X");
  }

  function resetGame() {
    setBoard(Array(9).fill(null));
    setTurn("X");
  }

  function cellClass(idx: number) {
    if (result && result.line.includes(idx)) return "cell win";
    return "cell";
  }

  let info: string;
  if (result) {
    info = `Victory: ${result.winner}`;
  } else if (isDraw) {
    info = "Game Drawn!";
  } else {
    info = `Turn: ${turn}`;
  }

  return (
    <div className="ttt-alt-container">
      <h2>TicTacToe Game</h2>
      <div className="ttt-info">{info}</div>
      <div className="ttt-board">
        {board.map((cell, idx) => (
          <button
            className={cellClass(idx)}
            key={idx}
            onClick={() => handleCellClick(idx)}
          >
            {cell}
          </button>
        ))}
      </div>
      <button className="ttt-reset" onClick={resetGame}>
        New Game
      </button>
    </div>
  );
}

export default TicTacToe;
