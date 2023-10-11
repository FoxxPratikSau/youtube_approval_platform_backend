const express = require('express');
const userAuth = require('../../middlewares/userAuth');
const multer = require('multer');
const Video = require('../../models/Video');

const editorUploadRouter = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}`);
    }
});

const upload = multer({
    storage,
    limits: {fileSize: 3 * 1024 * 1024 * 1024} //3GB maximum file size
});

editorUploadRouter.post('/upload', userAuth, upload.single('video'), async (req, res) => {
    if (!req.file) {
        return res.status(400).send('No file was uploaded.');
    }

    const video = new Video({
        title: req.body.title,
        description: req.body.description,
        filePath: req.file.path,
        uploadedBy: req.user._id,
        associatedYoutuber: req.body.associatedYoutuber
    });

    await video.save();
    res.json({ msg: 'Video uploaded successfully', video });
});

module.exports = editorUploadRouter;