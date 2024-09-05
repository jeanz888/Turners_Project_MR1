// Load environment variables from a .env file into process.env
require('dotenv').config();

// Import necessary modules
const express = require('express');
const axios = require('axios');

// Create an instance of the Express application
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Load Cognitive API endpoint and key from environment variables
const COGNITIVE_API_ENDPOINT = process.env.COGNITIVE_API_ENDPOINT;
const COGNITIVE_API_KEY = process.env.COGNITIVE_API_KEY;

// Default route to check if the server is running
app.get("/", (req, res) => {
    res.send("Hello World!");
});

/**
 * POST request to process data
 * Endpoint: /process
 * Description: Forwards the incoming JSON body to the Cognitive API and returns the response
 */
app.post('/process', async (req, res) => {
    const data = req.body; // Get the JSON data from the request body

    try {
        // Send a POST request to the Cognitive API
        const response = await axios.post(COGNITIVE_API_ENDPOINT, data, {
            // Set the necessary headers
            headers: {
                'Ocp-Apim-Subscription-Key': COGNITIVE_API_KEY,
                'Content-Type': 'application/json'
            }
        });

        // Send the response data from the Cognitive API back to the client
        res.json(response.data);
    } catch (error) {
        // Handle and log any errors, then return a 500 status code with an error message
        res.status(500).json({ error: error.message });
    }
});

// Define the port to run the server on, defaulting to 5000 if not specified in environment variables
const PORT = process.env.PORT || 5000;

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});