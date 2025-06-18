import { useState } from 'react';
import 'Calculator.css'; // 可以自行加樣式

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

export default Calculator;
