const axios = require('axios'); // Import the axios HTTP client

// Define the server endpoint (replace with your actual endpoint)
const SERVER_ENDPOINT = "https://mr1-test.cognitiveservices.azure.com/";

/**
 * Function to send data to the server
 * @param {Object} data - The data to send to the server
 * @returns {Object} The response data from the server
 * @throws Will throw an error if the request fails
 */
const sendDataToServer = async (data) => {
    try {
        // Send a POST request to the server endpoint with the provided data and headers
        const response = await axios.post(SERVER_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        // Return the response data
        return response.data;
    } catch (error) {
        // Log any errors that occur and rethrow them
        console.error('Error sending data to server:', error);
        throw error;
    }
};

/**
 * Main function to be executed
 * Description: Prepares data and uses the sendDataToServer function to send it
 */
const main = async () => {
    // Example data to be sent to the server
    const data = {
        example_key: 'example_value'
    };
    
    try {
        // Send data to the server and log the response
        const response = await sendDataToServer(data);
        console.log('Response from server:', response);
    } catch (error) {
        // Log any errors that occur during the process
        console.error('An error occurred:', error.message);
    }
};

// Execute the main function
main();