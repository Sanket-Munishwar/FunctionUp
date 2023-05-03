// const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")
const AuthorModel = require('../models/authorModel')
const publisherModel = require('../models/publisherModel')

const createBook= async function (req, res) {
    let book = req.body
    if(!book.author_id || !book.publisher_id){
        if(!book.author_id){
            res.send("Please enter a author_id")
        }else{
            res.send("Please enter a publisher_id")
        }   
    }
    else{
        let checkauthor = await AuthorModel.findById({_id:book.author_id})
        let checkpublisher = await publisherModel.findById({_id:book.publisher_id})
        if(!checkauthor || !checkpublisher){
            if(!checkauthor){
                res.send("Please provide valid author_id")
            }else{
                res.send("Please provide valid publisher_id" )
            }
        }
        let result = await bookModel.create(book)
        res.send({msg:result})   
    }  
}

const getBooksData= async function (req, res) {
    let books = await bookModel.find().populate(['publisher_id', 'author_id'])
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author')
    res.send({data: specificBook})
}


module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
