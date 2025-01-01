// Import necessary dependencies from React
import React from 'react';
import ReactDOM from 'react-dom/client';

// Import our main App component
import App from './App';

// Import global styles
import './styles/global.css';

// Create and render the root of our application
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our app inside React.StrictMode for development assistance
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);