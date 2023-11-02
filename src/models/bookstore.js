const mongoose = require('mongoose');
const bookstoreSchema = new mongoose.Schema({
    bookName: {
        type: String,
        required: true,
        unique: true

    },
    authorName: {
        type: String,
        required: true,
    },
    ISBN: {
        type: String,
        required: true,
        unique: true
    }, 
    publicationDate: {
        type: String,
        required: true,
    },
    price: {
        type: String,
        required: true,
    },
    
}, { timestamps: true })
module.exports = mongoose.model('bookstore', bookstoreSchema)