import React, { useState } from "react";
import Square from "./squre";

const Board = () => {
  const [state, setState] = useState(Array(9).fill(null));
  const [isTurn, setIsTurn] = useState(true);

  const checkWinner = () => {
    const winPattern = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let winner of winPattern) {
      const [a, b, c] = winner;
      if (state[a] !== null && state[a] === state[b] && state[b] === state[c]) {
        return state[a];
      }
    }
  };
  const isWinner = checkWinner();
  const isDraw = !isWinner && state.every((cell) => cell !== null);
  function handleClick(index) {
    if (state[index] !== null || isWinner) return;
    const copyState = [...state];
    copyState[index] = isTurn ? "X" : "O";
    setState(copyState);
    setIsTurn(!isTurn);
  }
  return (
    <div className="board-container">
      {isWinner ? (
        <div className="winner">The Winner is {isWinner}</div>
      ) : isDraw ? (
        <div className="winner">It's a Draw!</div>
      ) : (
        <>
          <div className="board-row">
            <Square onClick={() => handleClick(0)} value={state[0]} />
            <Square onClick={() => handleClick(1)} value={state[1]} />
            <Square onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(3)} value={state[3]} />
            <Square onClick={() => handleClick(4)} value={state[4]} />
            <Square onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="board-row">
            <Square onClick={() => handleClick(6)} value={state[6]} />
            <Square onClick={() => handleClick(7)} value={state[7]} />
            <Square onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
