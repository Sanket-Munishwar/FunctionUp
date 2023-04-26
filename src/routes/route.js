const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();

let persons= [
    {
    name: "PK",
    age: 10,
    votingStatus: false
 },
 {
    name: "SK",
    age: 20,
    votingStatus: false
 },
 {
    name: "AA",
    age: 70,
    votingStatus: false
 },
 {
    name: "SC",
    age: 5,
    votingStatus: false
 },
 {
    name: "HO",
    age: 40,
    votingStatus: false
 }
 ]
 router.get('/person', function(req,res){
   const arr = persons.filter(x => x.age > req.query.votingAge)
   const finalArr = arr.map(x => x.votingStatus=true)
   res.send( arr)
 })



module.exports = router;