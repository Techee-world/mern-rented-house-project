import  express  from "express";
import mongoose from "mongoose";
import dotenv from 'dotenv'
dotenv.config()

const app = express()


mongoose.connect(process.env.MONGOCONNECT)
.then(()=>{
    console.log('mongo db is connecting');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000,()=>{
    console.log('server is running port 3000 !!');
})