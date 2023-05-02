const AuthorModel = require('../models/authorModel')
const NewBookModel = require('../models/newBooksModel')


const createAuthor= async function (req, res) {
    let data= req.body
    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}

const getauthorbyId = async function(req, res){
    let getData = await AuthorModel.find( { authorName: "Chetan Bhagat" })
    let checkBook = await NewBookModel.find( { author_id : 500 })
    // res.send({ msg: getData, checkBook  })
    if(getData){
        res.send( { msg: checkBook})
    }
    else{
        res.send({ msg: getData})
    }
}

const updateValue = async function(req, res){
    // let getData = await NewBookModel.find( {newBookName: "Two states"})
    // // res.send(getData)
    let updateData = await NewBookModel.findOneAndUpdate(
        { newBookName: "Two states" },
        { $set: { price: 100} },
        { new: true}
    )
    res.send( {msg: updateData} )
}

const valueInBetween = async function(req, res){
    let getValue = await NewBookModel.find( { price : { $gte: 50 , $lte: 100} } ).select( { author_id : 1, price:1, newBookName:1})
    getValue.map(x => x.author_id = 300)
    let newValue = await AuthorModel.find({ author_id: { $eq : getValue.author_id = 300 } }).select( { authorName:1})
    res.send( { msg: getValue })
}

module.exports.createAuthor = createAuthor
module.exports.getauthorbyId = getauthorbyId
module.exports.updateValue = updateValue
module.exports.valueInBetween = valueInBetween