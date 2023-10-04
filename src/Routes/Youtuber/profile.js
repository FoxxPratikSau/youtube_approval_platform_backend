const express = require('express');
const userAuth = require('../../Middlewares/user-auth');

const youtuberProfileRouter = express.Router();

youtuberProfileRouter.get('/profile', userAuth, (req, res) => {
    res.status(200).json(req.user);
});

module.exports = youtuberProfileRouter;