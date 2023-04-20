const express = require('express');
const router = express.Router();
const lodash = require('lodash')
// const chunk = lodash.chunk()
const tail = lodash.tail()
const union = lodash.union()
const fromPairs = lodash.fromPairs()
// const loggerFile = require('../logger/logger')
// const dataHelper = require('../util/helper')
const validateFile = require('../validator/formatter')

// router.get('/test-me', function (req, res) {
//     console.log(loggerFile.welcome('sanket'))
//     res.send('Welcome')
// });
// router.get('/test-me', function (req, res) {
//     dataHelper.prinDate()
//     dataHelper.printMonth()
//     dataHelper.getBatchInfo('Technetium', 'W5D4',' Nodejs module system')
// });

// router.get('/test-welcome', function (req, res) {
//     // console.log('Welcome to my application. I am Sanket and a part of FunctionUp Technetium cohort')
//     res.send('Just testing')
// })

// router.get('/test-me', function (req, res) {
//     validateFile.trimmer()
//     validateFile.toLower()
//     validateFile.toUpper()
//     res.send('find the result')
// });

router.get('/test-me', function(req, res){
    // const arr = ["jan","feb","mar",'april','may','june','july','aug','seb','oct','nov','dec']
    // console.log(lodash.chunk(arr, 3))

    // const arr1 = [1,3,5,7,9,11,13,15,17,19]
    // console.log(lodash.tail(arr1))

    // console.log(lodash.union([1,3],[2,3],[3,4],[4,5],[5,6]))

    console.log(lodash.fromPairs([['name', 'sanket'],['location','nagpur']]))
    res.send('the lodash result')
})

module.exports = router;