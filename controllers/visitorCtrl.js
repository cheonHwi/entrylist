const { visitorModel } = require("../models/visitor");

// 완료
const createVisitorData = (visitorInfo) => {
    console.log(visitorInfo)
    return new Promise((resolve, reject) => {
        time = new Date().toLocaleString('en-US', {timeZone:'asia/seoul'}).split(" ")
        result = moment(time[1] + " " + time[2], 'hh:mm:ss A').format('HH:mm:ss')
        visitorInfo.entranceTime = result
        visitorModel.create(visitorInfo)
        .then(result => {
            if(result !== null)resolve(result.visitorName)
            else{
                console.log(result)
                resolve(false)
            }
        }).catch(err => {
            console.log(err)
            resolve(false)
        })
    })
}

module.exports = { createVisitorData };