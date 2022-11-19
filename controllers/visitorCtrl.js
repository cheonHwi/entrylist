const moment = require('moment')
const { visitorModel } = require("../models/visitor");


// 완료
const createVisitorData = (visitorInfo) => {
    console.log(visitorInfo)
    return new Promise((resolve, reject) => {
        const time = new Date().toLocaleString('en-US', {timeZone:'asia/seoul'}).split(" ")
        console.log(time)
        visitorInfo.entranceTime = time[1]
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