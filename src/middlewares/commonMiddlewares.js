
// const mid1= function ( req, res, next) {
//     req.falana= "hi there. i am adding something new to the req object"
//     console.log("Hi I am a middleware named Mid1")
//     next()
// }

const { default: mongoose } = require("mongoose")
const userModel = require("../models/userModel")
const productModel = require("../models/productModel")

// const mid2= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid2")
//     next()
// }

// const mid3= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid3")
//     next()
// }

// const mid4= function ( req, res, next) {
//     console.log("Hi I am a middleware named Mid4")
//     next()
// }

// const abc = function(req, res, next) {
//     //get the users IP
//     //save it in db
//     // console log
//     next()
// }

// const def = function(req, res, next) {
//    //get the users IP
//    //save it in db
//    // console log
//    next()
// }

// const xyz = function(req, res, next) {
//    //get the users IP
//    //save it in db
//    // console log
//    next()
// }
const midd1=function(req,res,next){
    const head=req.headers.isfreeappuser
    //console.log(head)
    const bodyy=req.body
   // console.log(bodyy)
    if(!head){
     res.send("Request is missing a mandatory header")
    }else{
     req.body.isFreeAppUser=head
     next()
 }
}

const midd2=function(req,res,next){
    const boddy=req.body
    const userid=boddy['userId']
    const productid=boddy['productId']
    if(!mongoose.isValidObjectId(userid)){
         res.send({error:"Invalid user Id"})
    }else if(!mongoose.isValidObjectId(productid)){
        res.send({error:"Invalid product Id"})
    }else{
        next()
    }
}

const midd3=async function(req,res,next){
    const userid=req.body.userId
    const productid=req.body.productId
    const checkUser=await userModel.findById(userid)
    const checkProduct=await productModel.findById(productid)
 
    if(!checkUser || !checkProduct){
        if(!checkUser){
            res.send({error:"user with this Id doesn't exist"})
        }else if(!checkProduct){
            res.send({error:"product with this Id doesn't exist"})
        }
    }else{
        next()
    }
    }




module.exports.midd1= midd1
module.exports.midd2= midd2
module.exports.midd3= midd3
// module.exports.mid4= mid4
// module.exports.abc = abc
