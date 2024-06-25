const axios = require('axios');

const SERVER_ENDPOINT = "https://mr1-test.cognitiveservices.azure.com/";

const sendDataToServer = async (data) => {
    try {
        const response = await axios.post(SERVER_ENDPOINT, data, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error sending data to server:', error);
        throw error;
    }
};

const main = async () => {
    const data = {
        example_key: 'example_value'
    };
    try {
        const response = await sendDataToServer(data);
        console.log('Response from server:', response);
    } catch (error) {
        console.error('An error occurred:', error.message);
    }
};

main();