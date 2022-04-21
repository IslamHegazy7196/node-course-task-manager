const express=require('express')
const tasks = require('./routes/tasks')
const app=express()
const connectDB= require('./db/connect')
require('dotenv').config()
// routes
app.get('/hello',(req,res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks',tasks)
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