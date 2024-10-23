import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import '../styles/index.css'; // 테일윈드 적용

const root = createRoot(document.getElementById('root'));
root.render(<App />);