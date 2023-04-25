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

router.post('/players-list', function (req, res) {
    let player = req.body.element
    players.push(player)
    res.send( {data : players , status: true})
});
module.exports = router;