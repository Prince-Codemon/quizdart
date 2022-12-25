const express = require('express')
const bodyparser = require('body-parser')
const app = express()
const cors = require('cors')
require('dotenv').config() 
const PORT = process.env.PORT || 5000
require('../backend/Config/db')
app.use(cors())

const router = require('../backend/routes')
app.use(bodyparser.json())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.use(router)
app.get('/',(req,res)=>{
  res.send('Hello World')
})
app.get('/api/test',(req,res)=>{
  res.send('Hello  api')
})


app.listen(PORT,()=>console.log('Listening ON PORT ', PORT))