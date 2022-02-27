const AnsModel = require("../model/answer-model")



//add answer
module.exports.addAnswer = function(req,res){
    let ans = new AnsModel({
        answer:req.body.answere
    })
    ans.save(function(err,data){
        if(err){
            res.json({msj:"Something went wrong..!!",status:-1,data:err})
        }else{
            res.json({msj:"Answere Added.....",Status:200, data:data})
        }
    })
}


//get Answere
module.exports.getAllAnswer = function(req,res){
    AnsModel.find(function(err,data){
        if(err){
            res.json({msg:"Something went wrong..!!",status:-1,data:err})
        }else{
            res.json({msg:"Answeres...",Status:200, data:data})
        }
    })
}

//update answere
module.exports.updateAnswer = function(req,res){

    let ansId = req.body.ansId
    let answere = req.body.answere

    AnsModel.updateOne({_id:ansId},{answer:answere},function(err,data){
        if(err){
            res.json({msg:"Something went wrong..!!",status:-1,data:err})
        }else{
            res.json({msg:"Updated....",status:200, data:data})
        }
    })
}

//delete
module.exports.deleteAnswer = function(req,res){
    let ansId = req.params.ansId
    AnsModel.deleteOne({_id:ansId},function(err,data){
        if(err){
            res.json({msg:"Something went wrong!!!",status:-1,data:err})
        }else{
            res.json({msg:"removed...",status:200,data:data})
        }
    })
}