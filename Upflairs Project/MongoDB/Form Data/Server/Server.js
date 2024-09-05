const express = require('express')
const app = express()
app.use(express.json())

require('./DB/Connection')
const User = require('./Models/User')

app.post("/", async(req, res)=>{
   let user = new Users(req.body)
   let result =await user.save()
   res.send(result)
})


app.listen(3000, 'localhost', ()=>{
console.log("The server is running on port 3000.....")
})