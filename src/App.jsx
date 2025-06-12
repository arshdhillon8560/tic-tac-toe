import { useState } from 'react';
import Board from './TicTacToeGame/Board';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="app-container">
      <h1 className="main-heading">🎮 Tic-Tac-Toe Game</h1>
      <p className="sub-heading">Challenge your friend in this classic game!</p>
      <Board />
    </div>
  );
}

export default App;
