const mongoose = require("mongoose")

const AnswerSchema = new mongoose.Schema({
    answer:{
        type:String
    }
})

const AnswerModel = mongoose.model("answer",AnswerSchema)
module.exports = AnswerModel