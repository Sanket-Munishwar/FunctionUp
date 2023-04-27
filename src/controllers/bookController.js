const bookModel = require('../models/book.Model')

const createBook = async function(req, res){
    let bookData = req.body
    let saveBookData = await bookModel.create(bookData)
    res.send( {msg: saveBookData})
}

const getBookData = async function(req,res){
    let allBooks = await bookModel.find()
    res.send( { msg: allBooks})
}

module.exports.createBook = createBook
module.exports.getBookData = getBookData