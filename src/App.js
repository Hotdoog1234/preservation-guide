import React, { useState } from 'react';
import './App.css';
import data from './data.json'; // Importing data.json
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  const [selectedParameter, setSelectedParameter] = useState('');
  const [results, setResults] = useState([]);

  // Get unique parameters from the data, then sort them alphabetically
  const parametersList = Array.from(new Set(data.map(item => item.Parameter))).sort(); // Sort the parameters alphabetically

  // Function to handle the search when the button is clicked
  const handleSearch = () => {
    // Filter the data based on the selected parameter
    const filteredResults = data.filter(item => item.Parameter === selectedParameter);
    if (filteredResults.length > 0) {
      setResults(filteredResults); // Update the results state with the filtered data
    } else {
      setResults([{ message: 'No results found for this parameter' }]);
    }
  };

  return (
    <div className="App">
      {/* Company Logo */}
      <header>
        <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Company Logo" className="company-logo" />
      </header>

      <h1>Preservation Guide Search</h1>

      {/* Dropdown Menu */}
      <div>
        <label htmlFor="parameterDropdown">Select a parameter: </label>
        <select
          id="parameterDropdown"
          value={selectedParameter}
          onChange={(e) => setSelectedParameter(e.target.value)}
        >
          <option value="">Choose a parameter</option>
          {parametersList.map((param, index) => (
            <option key={index} value={param}>{param}</option>
          ))}
        </select>
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Results Section */}
      <div id="results">
        {results.length > 0 ? (
          results.map((result, index) => (
            <div key={index} className="result-item">
              <h3>{result.Parameter}</h3>
              <p><strong>Tech:</strong> {result.Tech}</p>
              <p><strong>Matrix1:</strong> {result.Matrix1}</p>
              <p><strong>EPA Approved Method2:</strong> {result["EPA Approved Method2"]}</p>
              <p><strong>SW846 Method:</strong> {result["SW846 Method"]}</p>
              <p><strong>Recommended Volume:</strong> {result["Rec. Volume"]}</p>
              <p><strong>Bottle Type:</strong> {result["Bottle Type"]}</p>
              <p><strong>Preservative:</strong> {result.Preservative}</p>
              <p><strong>Temperature:</strong> {result.Temp}</p>
              <p><strong>Holding Time:</strong> {result["Holding Time"]}</p>
              <p><strong>Holding Time Units:</strong> {result["Holding Time Units"]}</p>
            </div>
          ))
        ) : (
          <p>{results.length > 0 ? "" : "No results found"}</p>
        )}
      </div>

      {/* Footer with Company Name and Tagline */}
      <footer>
        <p>© Shield Environmental Associates 2024</p>
      </footer>
    </div>
  );
}

export default App;
