const express = require('express');

const youtuberLogoutRouter = express.Router();

youtuberLogoutRouter.get('/logout', (req, res) => {
    res.clearCookie('token', {
        sameSite: 'none',
        secure: true
    });
    res.status(200).json({message: 'Logged out successfully!'});
});

module.exports = youtuberLogoutRouter;