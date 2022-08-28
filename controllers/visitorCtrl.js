const { visitorModel } = require("../models/visitor");

// 완료
const createVisitorData = (visitorInfo) => {
    return new Promise((resolve, reject) => {
        visitorInfo.entranceTime = new Date().toTimeString().split(" ")[0]
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