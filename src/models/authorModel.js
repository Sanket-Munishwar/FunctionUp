const mongoose = require("mongoose")

const authorSchema = new mongoose.Schema({
    authorName: String,
    author_id: {
        type:Number, required:true
    },
    age: Number,
    address: String
}, { timestamp: true })


module.exports = mongoose.model('Author', authorSchema)