import { useState } from 'react';
import './MySlider.css';

function MySlider() {
  const [r, setR] = useState(255);
  const [g, setG] = useState(245);
  const [b, setB] = useState(235);

  const bgColor = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="slider-box" style={{ backgroundColor: bgColor }}>
      <h2>背景色：{bgColor}</h2>
      <label>R: {r}</label>
      <input type="range" min="0" max="255" value={r} onChange={(e) => setR(+e.target.value)} />
      <label>G: {g}</label>
      <input type="range" min="0" max="255" value={g} onChange={(e) => setG(+e.target.value)} />
      <label>B: {b}</label>
      <input type="range" min="0" max="255" value={b} onChange={(e) => setB(+e.target.value)} />
    </div>
  );
}

export default MySlider;
