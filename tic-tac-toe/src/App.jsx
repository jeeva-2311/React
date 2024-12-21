import Player from "./Components/Player"
import Gameboard from "./Components/Gameboard"
import GameOver from "./Components/GameOver";
import Log from "./Components/log";

import { useState } from "react"
import { WINNING_COMBINATIONS, INITIAL_GAME_BOARD, PLAYERS } from "./data.JS";

const derivePlayer = (gameTurns) => (gameTurns.length > 0 && gameTurns[0].player === "X") ? "O": "X";
const deriveWinner = (WINNING_COMBINATIONS, gameBoard) => {

   for (const set of WINNING_COMBINATIONS){
    const firstSymbol = gameBoard[set[0].row][set[0].column]
    const secondSymbol = gameBoard[set[1].row][set[1].column]
    const thirdSymbol = gameBoard[set[2].row][set[2].column]
    
    if(firstSymbol && firstSymbol === secondSymbol && firstSymbol === thirdSymbol) 
      return firstSymbol;
  }; 
}

function App() {
  const [gameTurns, updateTurns] = useState([]);
  let activePlayer = derivePlayer(gameTurns);
  const restartGame = () => updateTurns([]);
  const gameBoard = [...INITIAL_GAME_BOARD.map(item => [...item])];

  for (const turn of gameTurns) {
    const { square, player } = turn; 
    const { row, col } = square;    
    gameBoard[row][col] = player;   
  }
  
  const winner = deriveWinner(WINNING_COMBINATIONS, gameBoard);

  function onSelectPlayer(rowIndex, colIndex){
    updateTurns((prevTurns) => {
      const updatedTurns = [
        { square: {row: rowIndex, col: colIndex}, player: derivePlayer(prevTurns)}
        ,...prevTurns
      ];
      return updatedTurns;
    })
  }

  return (
    <main>
      <div id = "game-container">
        <ol id = "players" className="highlight-player">
          <Player initialName={PLAYERS.X} symbol="X" activePlayer={activePlayer}/>
          <Player initialName={PLAYERS.O} symbol="O" activePlayer={activePlayer}/>
        </ol>
        {(winner || (gameTurns.length === 9 && !winner)) && <GameOver winner = {winner} onRestart={restartGame}/>}
        <Gameboard onSelectPlayer = {onSelectPlayer} gameBoard={gameBoard}/>
      </div>
      <Log gameTurns = {gameTurns}/>
    </main>
  )
}

export default App
