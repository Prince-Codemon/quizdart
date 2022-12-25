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

app.get('/',(req,res)=>{
  res.send('Hello World')
})

app.use(router)



app.listen(PORT,()=>console.log('Listening ON PORT ', PORT))