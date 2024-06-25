// Load environment variables from a .env file
require('dotenv').config();

// Access the environment variables
const cognitiveApiEndpoint = process.env.COGNITIVE_API_ENDPOINT;
const cognitiveApiKey = process.env.COGNITIVE_API_KEY;
const port = process.env.PORT || 5000;

// Use the variables in your application
// ...