const express = require('express');
const axios = require('axios');

const feedbackRouter = express.Router()

feedbackRouter.use(express.json());

feedbackRouter.post('/analyze-feedback', async (req, res) => {
    try {
        const {feedback} = req.body;

        const {data} = await axios.post('http://127.0.0.1:5000/feedback', {
          feedback: feedback,
        });
    
        res.json({ reply: data.reply, category: data.category });
      } catch (error) {
        res.status(500).json({ error: 'An error occurred' });
      }
});

module.exports = feedbackRouter;