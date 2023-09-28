const express=require('express');
const dotenv=require('dotenv')
const authRoute=require('./router')
const connectDb=require('./db')
const cors=require('cors');
connectDb()
dotenv.config()
const app=express();
app.use(express.json());
app.use(cors())

app.use('/api/v1',authRoute)
app.get('/',(res,send)=>{
    res.send("Server is running")
})
app.listen(4000,()=>{
    console.log('server is running')
})

