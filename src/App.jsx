import { useState } from 'react';
import './App.css';

function MySlider({ onColorChange }) {
  const [r, setR] = useState(255);
  const [g, setG] = useState(255);
  const [b, setB] = useState(255);

  const updateColor = (newR, newG, newB) => {
    onColorChange(`rgb(${newR}, ${newG}, ${newB})`);
  };

  const handleChange = (colorSetter, value, color) => {
    colorSetter(value);
    if (color === 'r') updateColor(value, g, b);
    if (color === 'g') updateColor(r, value, b);
    if (color === 'b') updateColor(r, g, value);
  };

  return (
    <div className="slider-container">
      <div>
        <label>R: {r}</label>
        <input type="range" min="0" max="255" value={r} onChange={(e) => handleChange(setR, parseInt(e.target.value), 'r')} />
      </div>
      <div>
        <label>G: {g}</label>
        <input type="range" min="0" max="255" value={g} onChange={(e) => handleChange(setG, parseInt(e.target.value), 'g')} />
      </div>
      <div>
        <label>B: {b}</label>
        <input type="range" min="0" max="255" value={b} onChange={(e) => handleChange(setB, parseInt(e.target.value), 'b')} />
      </div>
    </div>
  );
}

function Calculator() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setInput("");
  };

  const handleCalculate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch {
      setInput("錯誤");
    }
  };

  return (
    <div className="calculator">
      <div className="display">{input || "0"}</div>
      <div className="buttons">
        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>←</button>
        <button onClick={() => handleClick('/')}>/</button>
        <button onClick={() => handleClick('*')}>*</button>

        {[7, 8, 9].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>
        ))}
        <button onClick={() => handleClick('-')}>-</button>

        {[4, 5, 6].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>
        ))}
        <button onClick={() => handleClick('+')}>+</button>

        {[1, 2, 3].map(n => (
          <button key={n} onClick={() => handleClick(n.toString())}>{n}</button>
        ))}
        <button onClick={handleCalculate}>=</button>

        <button onClick={() => handleClick('0')}>0</button>
        <button onClick={() => handleClick('.')}>.</button>
      </div>
    </div>
  );
}

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const lines = [
    [0,1,2], [3,4,5], [6,7,8],
    [0,3,6], [1,4,7], [2,5,8],
    [0,4,8], [2,4,6]
  ];

  const calculateWinner = (squares) => {
    for (let [a,b,c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = xIsNext ? 'X' : 'O';
    setBoard(newBoard);
    const win = calculateWinner(newBoard);
    if (win) {
      setWinner(win);
    } else if (!newBoard.includes(null)) {
      setWinner('平手');
    } else {
      setXIsNext(!xIsNext);
    }
  };

  const handleReset = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setXIsNext(true);
  };

  return (
    <div className="tic-tac-toe feature-section">
      <h2>Tic-Tac-Toe 井字遊戲</h2>
      <div className="board">
        {board.map((square, idx) => (
          <button 
            key={idx} 
            className="square" 
            onClick={() => handleClick(idx)}
          >
            {square}
          </button>
        ))}
      </div>
      <div className="status" style={{ marginTop: '15px', fontWeight: 'bold' }}>
        {winner ? (winner === '平手' ? '平手！' : `獲勝者：${winner}`) : `下一位：${xIsNext ? 'X' : 'O'}`}
      </div>
      <button onClick={handleReset} style={{ marginTop: '10px', padding: '8px 16px' }}>重新開始</button>
    </div>
  );
}

function App() {
  const [bgColor, setBgColor] = useState("rgb(255,255,255)");

  return (
    <div className="app" style={{ backgroundColor: bgColor }}>
      <header>
        <h1>資工三甲 5B1G0031 陳秉榆</h1>
        <p>RGB 背景色調整器 + React 計算機 + Tic-Tac-Toe</p>
      </header>

      <section className="feature-section">
        <h2>背景顏色調整器</h2>
        <MySlider onColorChange={setBgColor} />
      </section>

      <section className="feature-section">
        <h2>簡易計算機</h2>
        <Calculator />
      </section>

      <section className="feature-section">
        <TicTacToe />
      </section>

      <footer>
        <p>© 2025 陳秉榆 - React + Vite Demo</p>
      </footer>
    </div>
  );
}

export default App;
