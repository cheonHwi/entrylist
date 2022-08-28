const { adminModel } = require('../models/admin');
const { visitorModel } = require('../models/visitor')

const adminAccess = (requestBody) => {
    return new Promise((resolve, reject) => {
        const { adminKey } = requestBody
        adminModel.findOne({adminKey})
        .then(result => {
            if(result !== null){
                resolve(true)
            }else{
                resolve(false)
            }
        })
        .catch(err => {
            resolve(false)
        })
    })
}

const lookupVisitor = (dateInfo) => {
    return new Promise((resolve, reject) =>{
        const { lookupYear, lookupMonth } = dateInfo
        const query = {entranceYear: {$eq : lookupYear}, entranceMonth: { $eq: lookupMonth }}
        const readField = {visitorName:1,visitorPhoneNumber:1,visitorReason:1,_id:1, entranceMonth:1, entranceDay:1};
        visitorModel.find(query, readField).sort({_id:-1})
        .then(result => {
            if(result !== null){
                resolve(result)
            }else{
                resolve(false)
            }
        })
        .catch(err => {
            resolve(false)
        })
    })
}

module.exports = { adminAccess , lookupVisitor }