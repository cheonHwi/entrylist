const { Schema, model } = require('mongoose');

const time = new Date().toLocaleString('en-US', {timeZone:'asia/seoul'}).split(" ")
const date = time[0].replace(",", "").split("/")

const visitorSchema = new Schema({
    visitorName : {type: String, required: true},
    visitorPhoneNumber : {type: String, required: true},
    visitorDivision : {type: String, required: true},
    visitorReason : {type: String, required: true},
    entranceTime : {type: String, default:time[1]},
    exitTime : {type: String},
    isEntrance : {type: Boolean},
    cardId: {type:String},
    temperature: {type:String, required:true},
    entranceYear: {type:Number, default:date[2]}, 
    entranceMonth: {type:Number, default:date[0]},
    entranceDay: {type:Number, default:date[1]},
    pinNumber: {type: String, required: true}
}, {timestamps: true});

exports.visitorModel = model('visitor', visitorSchema);