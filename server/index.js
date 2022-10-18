import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import helmet from "helmet";
import morgan from 'morgan';
import cors from 'cors';
import multer from 'multer';
import path from 'path';

import userRoutes from './routes/users.js';
import authRoutes from './routes/auth.js';
import postRoutes from './routes/posts.js';

const app = express();
app.use(cors());
const __dirname = path.resolve();
app.use("/images", express.static(path.join(__dirname, "public/images")))

//midleware
app.use(express.json());

app.use(helmet({
    crossOriginResourcePolicy: false,
  }));
app.use(morgan("common"));





//Database connection
dotenv.config();
mongoose.connect(process.env.MONGO_URL,()=>{
    console.log("Connected to database");
});

//file uploading
const storage = multer.diskStorage({
    destination: (req,file,cb)=>{
        cb(null,"public/images")
    },
    filename: (req, file, cb)=>{
        
        cb(null,file.originalname)
    }
})
const upload = multer({storage:storage});
app.post("/api/upload", upload.single("file"), (req,res)=>{
    try {
        return res.status(200).json("File uploaded successfully.")
    } catch (err) {
        console.log(err)
    }
})

//routes
app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);







//server is running
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`Backend is running on port ${PORT}`);
});