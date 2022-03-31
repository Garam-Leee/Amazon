import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// 데이터를 입력받아 화면에 표시할 내용을 반환하는 역할 (JSX를 사용)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// 앱에서 성능 측정을 시작하려면 함수를 전달하십시오.
// 결과를 로그에 기록하려면(예: reportWebVitals(console.log))
// 또는 분석 엔드포인트로 전송합니다. 상세: https://bit.ly/CRA-vitals
reportWebVitals();
