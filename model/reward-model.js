const mongoose = require("mongoose")

const rewardSchaem = new mongoose.Schema({
    status:{
        type:Boolean
    }
})

const RewardModel = mongoose.model("reward",rewardSchaem)
module.exports = RewardModel