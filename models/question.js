const mongoose = require('mongoose')

const Schema = mongoose.Schema
const BookSchema = new Schema({
    book_id: {
        type: Number,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    body: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Book', BookSchema)