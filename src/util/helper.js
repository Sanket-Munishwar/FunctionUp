
const currentDate = new Date()
const months = ["jan","feb","mar",'april','may','june','july','aug','seb','oct','nov','dec']
function prinDate(){
    console.log(currentDate)
}

function printMonth(){
    const month = currentDate.getMonth()
    console.log(months[month])
}

function getBatchInfo(batch, weekday, topic){
    console.log(`${batch}, ${weekday}  the topic for today is${topic}`)
}


module.exports.prinDate = prinDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo