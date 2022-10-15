import User from '../models/User.js';
import express from 'express';
import bcrypt from 'bcryptjs';
const router = express.Router();


//REGISTER
router.post("/register", async (req,res)=>{

    //hashing the password
    var salt = await bcrypt.genSaltSync(10);
    var hashedPassword = await bcrypt.hashSync(req.body.password, salt);

    //creating a new user
    const user = new User({
        username: req.body.username,
        email:req.body.email,
        password: hashedPassword,
    });

    //save user
    try {
        const result = await user.save();
        !user &&  res.status(500).json("User has not been registered!");
        return  res.status(200).json("User has been registered!");
    } catch (error) {
        res.status(500).json(err)
    }
    
res.json(result);
})

//login
router.post('/login',async (req,res)=>{
   
    try {
        const user = await User.findOne({email:req.body.email});
        !user && res.status(404).json("User not found")
        
        const isPassword = await bcrypt.compareSync(req.body.password, user.password);
        !isPassword && res.status(404).json("Wrong Credentials")
           
        res.status(200).json("User has been logged in");
            
    } catch (err) {
        res.status(500).json(err)
    }
})









export default router;