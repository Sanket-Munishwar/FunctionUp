const mongoose = require('mongoose')


const newBookSchema = mongoose.Schema({
    
    newBookName: String,
    author_id: {
        type: Number, required:true
    },
    price:Number,
    ratings:Number,
}, { timestamp: true})


module.exports = mongoose.model("NewBooks", newBookSchema)