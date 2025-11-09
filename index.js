import React from 'react';
// Note: This is the modern import for ReactDOM
import ReactDOM from 'react-dom/client'; 
import App from './App';
// Assuming your CSS file is correctly named styles.css
import './styles.css'; 

// This function is required in newer versions of React
const root = ReactDOM.createRoot(document.getElementById('root'));

// This renders the App component into the 'root' element
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);