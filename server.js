require('dotenv').config();
const express = require('express');
const axios = require('axios');

const app = express();
app.use(express.json());

const COGNITIVE_API_ENDPOINT = process.env.COGNITIVE_API_ENDPOINT;
const COGNITIVE_API_KEY = process.env.COGNITIVE_API_KEY;

app.post('/process', async (req, res) => {
    const data = req.body;
    try {
        const response = await axios.post(COGNITIVE_API_ENDPOINT, data, {
            headers: {
                'Ocp-Apim-Subscription-Key': COGNITIVE_API_KEY,
                'Content-Type': 'application/json'
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});