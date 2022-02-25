const mongoose = require("mongoose")


//schema
let QueSchema = new mongoose.Schema({
    question:{
        type:String
    }
})


//model
let QueModel = mongoose.model("question",QueSchema)

module.exports = QueModel
