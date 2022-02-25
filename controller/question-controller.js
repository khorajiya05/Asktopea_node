const QueModel = require("../model/question-model")

module.exports.addQuestion = function(req,res){
   let que = new QueModel({
       question:req.body.question
   })
   que.save(function(err,success){
       if(err){
           console.log(err)
           res.json({msg:"smw", status:-1,data:req.body})
       }else{
           res.json({msg:"question added...",status:200, data:success})
       }
   })
}

