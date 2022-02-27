const QueModel = require("../model/question-model")


//add question
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

//get question
module.exports.getAllQue = function(req,res){
    QueModel.find(function(err,que){
        if(err){
            res.json({msg:"smw", status:-1, data:err})
        }else{
            res.json({msg:"questions....", status:200, data:que})
        }
    })
}



//update question

module.exports.updateQue = function(req,res){

    let queId = req.body.queId
    let question = req.body.question

    QueModel.updateOne({_id:queId},{question:question},function(err,data){
        if(err){
            res.json({mag:"Something Went Wrtong..!!",status:-1, data:err})
        }else{
            res.json({msg:"Question Updated..",status:200,data:data})
        }
    })
}


//delete

module.exports.deleteQue = function(req,res){
    let queId = req.body.queId
    QueModel.deleteOne({_id:queId},function(err,data){
        if(err){
            res.json({mag:"Something Went Wrtong..!!",status:-1, data:err})
        }else{
            res.json({msg:"Question Deleted..",status:200,data:data})
        } 
    })
}