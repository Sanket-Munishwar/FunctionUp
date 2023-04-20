
const something = ' functionUp'
function trimmer(){
    console.log(something.trim())
}

function toLower(){
    console.log(something.toLowerCase())
}
function toUpper(){
    console.log(something.toUpperCase())
}

module.exports.trimmer = trimmer
module.exports.toLower = toLower
module.exports.toUpper = toUpper