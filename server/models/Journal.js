const mongoose = require('mongoose')

const journalSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    date:{type:Date,default:Date.now()},
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User',
        required:true,
    }
})

const journalModel =  mongoose.model('Journal',journalSchema)

module.exports = journalModel