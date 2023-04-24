const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router();


router.get('/test-me', function (req, res) {
    res.send('This should be working!')
});

router.get('/solu1',function(req, res){
    let arr = [1,2,3,5,6,7];
    let missingNumber = 0
    for (let i=0; i< arr.length; i++){
        missingNumber += arr[i]  // missingNumber = missingNumber + arr[i]
    }
    let n = arr[arr.length - 1]
    let result = n * (n + 1)/2
    res.send( { data: result - missingNumber})

})

router.get('/solu2',function(req, res){
    let arr = [33,34,35,37,38];
    let n = arr.length
    let total = 0
    for (let i in arr){
        total += arr[i] // total = total + arr[i]
    }
    let first = arr[0]
    let last = arr.pop()
    
    let sum = (n+1) * (first + last)/2
    let missingNumber = sum - total

    res.send( { data : missingNumber})
    

})

module.exports = router;