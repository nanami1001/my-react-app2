import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' // 確保這裡是你想展示的元件
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App /> {/* 或你可以改成 <MySlider /> */}
  </React.StrictMode>
)