const express = require('express');
const router = express.Router();



// let movies = ['avengers','fast and furious','iron man','godzilla','the eternity']
router.get('/movies', function(req,res){
    let movieCollection = ['avengers','fast and furious','iron man','godzilla','the eternity']
    console.log(req.query)
    res.send(movies)
})

router.get('/movies/:indexName', function(req, res){
    let movieCollection = ['avengers','fast and furious','iron man','godzilla','the eternity']
    if(req.params.indexName > movieCollection.length || req.params.indexName < 0){
        return res.send('Write a valid index number')
    }
    else{
        for(let i=0; i < movieCollection.length; i++){
            if(req.params.indexName == i){
                return res.send(movieCollection[i])
            }
        }
    }
    
})
router.get('/films/:filmId', function (req, res){
    let ArrObj=[ {
      'id': 1,
        'name': 'The Shining'
       }, {
        'id': 2,
        'name': 'Incendies'
       }, {
        'id': 3,
        'name': 'Rang de Basanti'
       }, {
        'id': 4,
        'name': 'Finding Nemo'
       }]
    const ans=ArrObj.find(x=> x.id==req.params.filmId)
       if(ans){
        res.send(ans)
       }else{
        res.send('No movie exists with this id')
       }
})



module.exports = router;