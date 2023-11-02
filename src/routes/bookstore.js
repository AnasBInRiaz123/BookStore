const express = require('express');
const router = express.Router();

const { addbookstore, getbookstore, updatebookstore, deletebookstore,getbooksDetails } = require('../controller/bookstore');




router.post('/books',  addbookstore)
router.get('/books', getbookstore)
router.get('/books/:id', getbooksDetails)
router.put('/books/:id', updatebookstore)
router.delete('/books/:id', deletebookstore)



module.exports = router