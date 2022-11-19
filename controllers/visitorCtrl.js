const { visitorModel } = require("../models/visitor");


// 완료
const createVisitorData = (visitorInfo) => {
    console.log(visitorInfo)
    return new Promise((resolve, reject) => {
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