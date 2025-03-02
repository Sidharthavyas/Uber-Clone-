const dotenv = require('dotenv')
dotenv.config()// this will configure the dotenv is this file i.e server.js // all the features will be imported for .env
const express = require('express')
const app = express()
const cors = require('cors')// cors=cross origin resourse sharing , its is secuirty feature , it control how backend and frontend communicate, also appi secuirty,third -party integeration
const connectToDb =require('./db/db')
const userRoutes = require('./routes/user.routes')
const captainRoutes = require('./routes/captain.routes')
const cookieParser = require('cookie-parser')

connectToDb()
app.use(cors())
app.use(express.json())// this will convert the data into json format
app.use(express.urlencoded({extended : true})) // this will convert the data into urlencoded format
app.use(cookieParser())

app.get('/',(req,res)=>{
    res.send("hello world")
})
app.use('/users',userRoutes)
app.use('/captains',captainRoutes)
module.exports = app // this exports this whole content/module to other file which can be used by the other files to use the features/power of app.js
