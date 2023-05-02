const NewBoookModel = require('../models/newBooksModel')



const createNewBook= async function (req, res) {
    let data= req.body
    let savedData= await NewBoookModel.create(data)
    res.send({msg: savedData})
}


module.exports.createNewBook = createNewBook
