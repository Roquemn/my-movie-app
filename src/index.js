import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import LandingPage from './components/LandingPage/LandingPage';

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);