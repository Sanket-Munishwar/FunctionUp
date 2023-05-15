const jwt = require("jsonwebtoken");
const UserModel = require("../models/userModel");

const createUser = async function(req , res){
  try{
    let data = req.body;
    let createAllUser = await UserModel.create(data);
    res.status(201).send({status:true , created:createAllUser});
  }
  catch(err){
    res.status(400).send({msg:"please check your input", error:err})
  }
}

const logInUser = async function(req , res){
    try{
    let email = req.body.emailId;
    let password = req.body.password;
    let user = await UserModel.findOne({emailId:email , password:password});
    if (!user) {
      return res.send({status:false , msg:"Error: User"});
    }
    let token = jwt.sign({userId:user._id.toString()} , "functionup-californium-secret-key");
    return res.send({status:true , created:token});
    }
    catch(err){
      res.status(400).send({msg:"please check your input", error:err})
    }

}

const getUser = async function(req , res){

  try{
    let userId = req.params.userId;
    let userDetails = await UserModel.findById(userId);

    res.send({status:true , Data:userDetails});
  }
  catch(err){
    res.status(400).send({msg:"please check your input", error:err})
  }
}

const updateUser = async function(req , res){

  try{
    let userId = req.params.userId;
    let userData = req.body;
    let updateUser = await UserModel.findOneAndUpdate(
      {_id:userId},
      userData,
      {new:true}
    );

    res.send({status:true , updated:updateUser});
  }
  
  catch(err){
    res.status(400).send({msg:"please check your input", error:err})
  }
  
}

let deleteUser = async function(req , res){
  try{

    let userId = req.params.userId;
    let deleteUser = await UserModel.findOneAndUpdate(
      {_id:userId},
      {$set:{isDeleted:true}},
      {new:true}
    );

    res.send({status:true , deleted:deleteUser});
  }
  catch(err){
    res.status(400).send({msg:"please check your input", error:err})
  }
}

let postMessage = async function(req , res){
  try{
  
    let message = req.body.message;
    let userId = req.params.userId;
    let users = await UserModel.findById(userId);
    let updatedPost = users.posts;
    //add message to the users post
    updatedPost.push(message);

    let updateThePost = await UserModel.findOneAndUpdate(
      {_id : users._id},
      {posts : updatedPost},
      {new : true}
    );

    res.send({status : true , post : updateThePost});
  }
  catch(err){
    res.status(400).send({msg:"please check your input", error:err})
  }
}

module.exports.createUser = createUser;
module.exports.logInUser = logInUser;
module.exports.getUser = getUser;
module.exports.updateUser = updateUser;
module.exports.deleteUser = deleteUser;
module.exports.postMessage = postMessage;
