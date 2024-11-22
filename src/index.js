import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './index.css';  // Your CSS file (if you have one)
import App from './App'; // Import your main component (App)
import reportWebVitals from './reportWebVitals'; // Optional for web vitals

// Create the root and render the App component inside the div with id "root"
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: You can track web vitals if needed
reportWebVitals();
