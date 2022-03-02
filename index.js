const express = require("express")
const mongoose = require("mongoose")

const sessionController = require("./controller/session-controller")
const roleController = require("./controller/role-controller")
const userController = require("./controller/user-controller")
const questionController = require("./controller/question-controller")
const answerController = require("./controller/answer-controller")
const rewardController = require("./controller/reward-controller")


const app = express()
//midlware

app.use(express.json())//mobile---accept json data from request and set data into body
app.use(express.urlencoded({extended:true}))//web-----accept usrl encoded data from request and set data into body


//database

mongoose.connect('mongodb://localhost:27017/asktopea',function(err){
  if(err){
    console.log("db connection fail .. .. .")
    console.log(err)
  }else{
    console.log("db connected......")
  }
})


//url
app.get("/",function(req,res){
    res.write("welcome...")
    res.end()
})



//session          
app.get("/login",sessionController.login)
app.get("/signup",sessionController.signup)
app.post("/saveUser",sessionController.saveUser) 


//role
app.post("/roles",roleController.addRole)
app.get("/roles",roleController.getAllRoles)
app.delete("/roles",roleController.deleteRole)
app.put("/roles",roleController.updateRole)

//user
app.post("/users",userController.addUser)
app.get("/users",userController.getAllUsers)
app.delete("/users/:userId",userController.deleteUser)
app.put("/users",userController.updateUser)

//question
app.post("/question",questionController.addQuestion)
app.get("/question",questionController.getAllQue)
app.put("/question",questionController.updateQue)
app.delete("/question",questionController.deleteQue)

//answere
app.post("/answere",answerController.addAnswer)
app.get("/answere",answerController.getAllAnswer)
app.put("/answere",answerController.updateAnswer)
app.delete("/answere/:ansId",answerController.deleteAnswer)

//reward
app.post("/reward",rewardController.giveReward)
app.put("/reward",rewardController.updateReward)
app.get("/reward",rewardController.getReward)
app.delete("/reward/:rewId",rewardController.deleteReward)


app.listen(3000,function(){
  console.log("server started on 3000");  
})