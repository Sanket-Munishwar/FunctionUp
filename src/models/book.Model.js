const mongoose = require('mongoose')


const bookSchema = mongoose.Schema( {
    bookName: String,
    authorName: String,
    category: String,
    year: Number
}, { timestapms: true} )

module.exports = mongoose.model('Book', bookSchema)