import React, { useEffect, useState } from "react";
import Squre from "./Squre";

const Board = () => {
  const [isXtrun, setXturn] = useState(true);
  const [state, setstate] = useState(Array(9).fill(null));

  const checkWinner = () => {
    const winnerLogic = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let logic of winnerLogic) {
      const [a, b, c] = logic;
      if (state[a] != null && state[a] === state[b] && state[a] === state[c]) {
        return true;
      }
    }

    return false;
  };

  const isWinner = checkWinner();

  const handleClick = (index) => {
    const copyState = { ...state };
    copyState[index] = isXtrun ? "1" : "0";
    setstate(copyState);
    setXturn(!isXtrun);
  };

  console.log(state);

  function loadAgain(){
    setstate(Array(9).fill(null))
  }
 
  return (
    <div className="board-container">
      <div><h4>player {isXtrun ? 'X' : 'O'} your turn</h4></div>
      {isWinner ? (
        <>{isWinner} won the game <button onClick={loadAgain}>Play again</button></>
      ) : (
        <>
          <div className="borad-row">
            <Squre onClick={() => handleClick(0)} value={state[0]} />
            <Squre onClick={() => handleClick(1)} value={state[1]} />
            <Squre onClick={() => handleClick(2)} value={state[2]} />
          </div>
          <div className="borad-row">
            <Squre onClick={() => handleClick(3)} value={state[3]} />
            <Squre onClick={() => handleClick(4)} value={state[4]} />
            <Squre onClick={() => handleClick(5)} value={state[5]} />
          </div>
          <div className="borad-row">
            <Squre onClick={() => handleClick(6)} value={state[6]} />
            <Squre onClick={() => handleClick(7)} value={state[7]} />
            <Squre onClick={() => handleClick(8)} value={state[8]} />
          </div>
        </>
      )}
    </div>
  );
};

export default Board;
