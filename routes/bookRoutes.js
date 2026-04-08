const express = require('express');
const router = express.Router();

const Book = require('../models/bookModel');

router.get('/', (req, res) => {
    res.json({ message: 'Listing All Books' });
});

router.get('/:bookid', (req, res) => {
    res.json({ message: `Listing Book with ID: ${req.params.bookid}` });
});

router.post('/', async (req, res) => {
    console.log(req.body);

    try {
        const book = await Book.create(req.body);
        return res.json({ book: book });
    } catch (error) {
        console.log(error);
        returnres.status(500).json({ error: 'Server Error' });
    }
});

router.put('/:bookid', (req, res) => {
    res.json({ message: `Updating Book with ID: ${req.params.bookid}` });
});

router.delete('/:bookid', (req, res) => {
    res.json({ message: `Deleting Book with ID: ${req.params.bookid}` });
});

module.exports = router;