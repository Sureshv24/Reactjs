import React, { useState } from "react";
import "./App.css";

export default function App() {
  const [board, setBoard] = useState(Array(9).fill(""));
  const [isTurn, setIsTurn] = useState(true);

  const handleClick = (index) => {
    if (board[index] !== "") return;

    const newBoard = [...board];
    newBoard[index] = isTurn ? "X" : "O";

    setBoard(newBoard);
    setIsTurn(!isTurn);
  };

  return (
    <div className="app">
      <h1>Tic-Tac-Toe Game</h1>

      <h2>
        Current Player: {isTurn ? "X" : "O"}
      </h2>

      <div className="board">
        {board.map((cell, index) => (
          <div
            key={index}
            className="box"
            onClick={() => handleClick(index)}
          >
            {cell}
          </div>
        ))}
      </div>
    </div>
  );
}