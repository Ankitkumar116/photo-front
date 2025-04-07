import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import Home from './Home';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('Root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
