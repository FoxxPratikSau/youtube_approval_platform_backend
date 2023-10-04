const express = require('express');
const userAuth = require('../../Middlewares/user-auth');

const editorProfileRouter = express.Router();

editorProfileRouter.get('/profile', userAuth, (req, res) => {
    res.status(200).json(req.user);
});

module.exports = editorProfileRouter;