const RewModel = require("../model/reward-model")

//add reward
module.exports.giveReward = function(req,res){
   let ans = new RewModel({
        status: req.body.status,
    })
    ans.save(function(err,data){
        if(err){
            res.json({msg:"Something went wrong..!!",Status: -1, data:err})
        }else{
            res.json({msg:"Success...",Status: 200, data:data})
        }
    })
}


//update
 module.exports.updateReward = function(req,res){
     let rewId = req.body.rewId
     let status = req.body.status

     RewModel.updateOne({_id:rewId},{status:status},function(err,data){
         if(err){
             res.json({Msg:"Something went wrong..!!", Status: -1, data: data})
         }else{
             res.json({Msg:"Updated...", Status: 200, data:data})
         }
     })
 }


//get reward
module.exports.getReward = function(rew,res){
    //let rewId = req.body.rewId
    RewModel.find(function(err,data){
        if(err){
            res.json({Msg: "something went wrong..!!",Status:-1, data:err})
        }else{
            res.json({Msg: "Reward Data..", Status: 200, data: data})
        }
    })
}


module.exports.deleteReward=function(req,res){
    let rewId = req.params.rewId
    RewModel.deleteOne({_id:rewId},function(err,data){
        if(err){
            res.json({Msg:"Something Went wrong..!!", Status:-1, data: err})
        }else{
            res.json({Msg: "deleted....", Status: 200, data:data})
        }
    })
}