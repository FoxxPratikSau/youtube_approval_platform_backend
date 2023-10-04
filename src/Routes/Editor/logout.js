const express = require('express');

const editorLogoutRouter = express.Router();

editorLogoutRouter.get('/logout', (req, res) => {
    res.clearCookie('token', {
        sameSite: 'none',
        secure: true
    });
    res.status(200).json({message: 'Logged out successfully!'});
});

module.exports = editorLogoutRouter;