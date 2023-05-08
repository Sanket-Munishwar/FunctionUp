const { eventNames } = require("../models/userModel")

const getname = async function(req, res){
    const name = req.body.name
    const getperticularname = await authorSchema.find({ name: {$eq: name}})

}