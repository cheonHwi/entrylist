const { Schema, model } = require('mongoose');

const undividedDate = new Date()

const visitorSchema = new Schema({
    visitorName : {type: String, required: true},
    visitorPhoneNumber : {type: String, required: true},
    visitorDivision : {type: String, required: true},
    visitorReason : {type: String, required: true},
    entranceTime : {type: String, default:null},
    exitTime : {type: String},
    isEntrance : {type: Boolean},
    cardId: {type:String},
    temperature: {type:String, required:true},
    entranceYear: {type:Number, default:undividedDate.getFullYear()}, 
    entranceMonth: {type:Number, default:undividedDate.getMonth()+1},
    entranceDay: {type:Number, default:undividedDate.getDate()},
    pinNumber: {type: String, required: true}
}, {timestamps: true});

exports.visitorModel = model('visitor', visitorSchema);