import React, { useState } from 'react'; // Import React and the useState hook
import axios from 'axios'; // Import axios for making HTTP requests
import './App.css'; // Import CSS file for styling

/**
 * App Component
 * @returns {JSX.Element} The App component
 */
const App = () => {
  const [inputData, setInputData] = useState(''); // State for storing user input
  const [responseData, setResponseData] = useState(null); // State for storing the server response
  const [error, setError] = useState(null); // State for storing any errors

  /**
   * handleChange function
   * @param {Object} event - The event object
   * Description: Updates the inputData state whenever the input field value changes
   */
  const handleChange = (event) => {
    setInputData(event.target.value);
  };

  /**
   * handleSubmit function
   * @param {Object} event - The event object
   * Description: Sends inputData to the server when the form is submitted
   */
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    setError(null); // Clear any previous errors

    try {
      // Send the inputData to the server
      const response = await axios.post('http://localhost:5000/process', {
        example_key: inputData
      });
      setResponseData(response.data); // Store the server response in responseData state
    } catch (error) {
      setError(error.message); // Store any errors in the error state
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Cognitive API Client</h1>
        {/* Form for user to input data and submit */}
        <form onSubmit={handleSubmit}>
          <label>
            Input Data:
            <input
              type="text"
              value={inputData}
              onChange={handleChange} // Update inputData state on change
            />
          </label>
          <button type="submit">Submit</button>
        </form>
        {/* Display response data if available */}
        {responseData && (
          <div>
            <h2>Response</h2>
            <pre>{JSON.stringify(responseData, null, 2)}</pre>
          </div>
        )}
        {/* Display error message if available */}
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

export default App; // Export the App component