const express=require('express')
const tasks = require('./routes/tasks')
const app=express()
const connectDB= require('./db/connect')
require('dotenv').config()
const notFound=require('./middleware/notFound')
// middleware
app.use(express.json());
app.use(express.static('./public'))
// routes
app.use('/api/v1/tasks',tasks)
app.use(notFound)
 port=5000;
const start=async()=>{
    try {
        await connectDB(process.env.MONGO)
        app.listen(port,console.log(`server is listening on port ${port}`))
    } catch (error) {
        console.log(error)
    }
}
start()