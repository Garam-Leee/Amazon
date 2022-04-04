import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'; 

// 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할 (JSX를 사용)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);