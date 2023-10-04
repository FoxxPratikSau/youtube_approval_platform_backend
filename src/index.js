require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
require('express-async-errors');
const signUpRouter = require('./Routes/signup');
const loginRouter = require('./Routes/login');
const profileRouter = require('./Routes/profile');
const logoutRouter = require('./Routes/logout');
const googleAuthRouter = require('./Routes/googleAuth');
const feedbackRouter = require('./Routes/feedback');

const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(googleAuthRouter);
app.use(signUpRouter);
app.use(loginRouter);
app.use(profileRouter);
app.use(feedbackRouter);
app.use(logoutRouter);

app.all('*', async (req, res) => {
    throw new Error('Route not found');
});

app.use((err, req, res, next) => {
    console.log(err);
    res.status(400).json({error: err.message});
});

mongoose.connect('mongodb://127.0.0.1:27017/youTube')
    .then(() => {
        app.listen(3000, () => {
            console.log('Listening on port 3000');
        });
    })
    .catch(err => {
        console.log(err);
    });