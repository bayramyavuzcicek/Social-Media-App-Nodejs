import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from 'helmet';
import morgan from 'morgan';
const app = express();


//dotenv ready to use
dotenv.config();

//Database connection
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to database");
});





//server is running
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`);
});