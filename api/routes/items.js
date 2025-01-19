const express = require('express');
const router = express.Router();
const upload = require('../middleware/multer');
const { addItem, getItems, downloadFile } = require('../controllers/items');

// Route to get all items
router.get('/', getItems);

// Route to upload a file and its metadata
router.post('/', upload.single('file'), addItem);

// Route to download a file by its ID
router.get('/download/:id', downloadFile);

module.exports = router;
