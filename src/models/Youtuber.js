const { Schema, model } = require('mongoose');

const YoutuberSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    apiKey: {
        type: String,
        required: true
    },
    dateRegistered: {
        type: Date,
        default: Date.now
    },
    accessToken: {
        type: String,
        required: true
    },
    refreshToken: {
        type: String
    }
});

module.exports = model('Youtuber', YoutuberSchema);
