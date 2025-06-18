import { useState } from 'react';

function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null)); // 3x3 棋盤
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const lines = [
    [0,1,2], [3,4,5], [6,7,8],  // 橫排
    [0,3,6], [1,4,7], [2,5,8],  // 直排
    [0,4,8], [2,4,6]            // 斜排
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
    if (board[index] || winner) return; // 已有棋子或遊戲結束不處理

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

export default TicTacToe;
