const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


let players =
[
    {
       "name": "manish",           
       "dob": "1/1/1995",
       "gender": "male",
       "city": "jalandhar",
       "sports": ["swimming"]
    },
    {
       "name": "gopal",
       "dob": "1/09/1995",
       "gender": "male",
       "city": "delhi",
       "sports": ["soccer"]
    },
    {
       "name": "lokesh",
       "dob": "1/1/1990",
       "gender": "male",
       "city": "mumbai",
       "sports": ["soccer"]
    },
]

// router.post('/players-list', function (req, res) {
//    let player = players.find(x => x.name !== req.body.name)
//    if (player){
//       players.push(req.body)
//    }
//    for(let i =0; i< players.length; i++){
//       let temp = players[i]
//       if(temp.name !== req.body.name){
//          res.send( {data: players, status:true})
//       }
//       players.push(req.body)
//    }    
// });
router.post('/players', function (req, res) {
      for (let i=0; i< players.length;i++){
         const playerName = req.body.name
         if(players[i].name === playerName){
            return res.send( {message: "Name already exist", status: false})
         }
      }
      const playerData = req.body
      players.push(playerData)
      console.log(playerData)
      res.send( {data: players, status: true})
});


module.exports = router;