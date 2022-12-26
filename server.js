require('dotenv').config() 
require('./Config/db')
const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
const PORT = process.env.PORT || 3001
const router = require('./routes')
app.use(cors())
app.use(express.json())
app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
app.use(router)
app.get('/',(req,res)=>{
  res.send('Server Running')
})



app.listen(PORT,()=>console.log(`Listening on => http://localhost:${PORT}`))