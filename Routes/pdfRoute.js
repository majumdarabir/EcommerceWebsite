const express = require('express');
const multer = require('multer');
const path = require('path');
const router = express.Router();

// Set storage engine
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/pdf/') // Upload directory for PDF files
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + '-' + file.originalname) // Unique filename
    }
});

// Init multer upload
const upload = multer({
    storage: storage,
    fileFilter: function (req, file, cb) {
        checkFileType(file, cb);
    }
}).single('pdf');

// Check file type
function checkFileType(file, cb) {
    // Allowed extensions
    const filetypes = /pdf/;
    // Check extension
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    // Check mimetype
    const mimetype = filetypes.test(file.mimetype);

    if (mimetype && extname) {
        return cb(null, true);
    } else {
        cb('Error: PDF files only!');
    }
}

// POST route for uploading PDF files
router.post('/uploadpdf', (req, res) => {
    upload(req, res, (err) => {
        if (err) {
            res.status(400).json({ error: err });
            console.log(err)
        } else {
            // File uploaded successfully
            res.json({ message: 'File uploaded successfully' });
        }
    });
});





module.exports = router;