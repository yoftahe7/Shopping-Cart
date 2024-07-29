import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Ensure the casing matches the filename
import './styles/index.css'; // Import global styles here

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
