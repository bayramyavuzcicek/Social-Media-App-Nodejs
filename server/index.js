import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';

import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';

const app = express();


//midleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));



//Database connection
dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to database");
});




//routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);







//server is running
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`);
});