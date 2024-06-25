import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  const [inputData, setInputData] = useState('');
  const [responseData, setResponseData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);

    try {
      const response = await axios.post('http://localhost:5000/process', {
        example_key: inputData
      });
      setResponseData(response.data);
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cognitive API Client</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Input Data:
            <input type="text" value={inputData} onChange={handleChange} />
          </label>
          <button type="submit">Submit</button>
        </form>
        {responseData && (
          <div>
            <h2>Response</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
        {error && (
          <div>
            <h2>Error</h2>
            <pre>{error}</pre>
          </div>
        )}
      </header>
    </div>
  );
};

export default App;