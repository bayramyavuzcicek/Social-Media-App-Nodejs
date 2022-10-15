import express from 'express';
import bcrypt from 'bcryptjs';
import User from '../models/User.js';
const router = express.Router();



//update user
router.put("/:id",async(req,res)=>{

    if(req.body.userId === req.params.id || req.body.isAdmin){
        if(req.body.password){
            try {
                //şifre hashleme
                const salt = await bcrypt.genSaltSync(10);
                req.body.password = await bcrypt.hashSync(req.body.password, salt);
            } catch (err) {
              return  res.status(500).json(err)
            }
        }
        try {
            //kullanıcı güncelleme
            const updatedUser = await User.findByIdAndUpdate(req.params.id,{
                $set: req.body
            },{new: true})
            return res.status(200).json(updatedUser);
        } catch (err) {
           return res.status(500).json(err)
        }
    }
})







//delete user
router.delete("/:id",async(req,res)=>{
    if(req.body.userId === req.params.id || req.body.isAdmin){
        try {
            //kullanıcı silme
            await User.findByIdAndDelete(req.params.id)
            res.status(200).json("Your account has been deleted");
        } catch (err) {
           return res.status(500).json(err)
        }
    }else{
        res.status(404).json("You can delete only your account")
    }
})
//get a user
router.get("/:id",async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        !user && res.status(404).json("user not found");
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json(err)
    }
})
//follow a user
router.put("/:id",async(req,res)=>{})
//unfollow a user
router.put("/:id",async(req,res)=>{})






export default router;