const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const path = require('path')
const cors = require('cors')
require('dotenv').config() 
const PORT = process.env.PORT || 5000
require('../backend/Config/db')
app.use(cors())

const router = require('../backend/routes')
app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
app.use(express.json())
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname , '/frontend/build')));
  app.get("*",(req,res)=>{
    res.sendFile(path.resolve(__dirname,"frontend", "build","index.html"))
  })
}
app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.use(router)



app.listen(PORT,()=>console.log('Listening ON PORT ', PORT))