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
});


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
});


//get a user
router.get("/",async(req,res)=>{
    const userId = req.query.userId;
    const username = req.query.username;
    try {
        const user = userId 
        ? await User.findById(userId) 
        : await User.findOne({username:username});

        !user && res.status(404).json("user not found");
        const {password,updatedAt, ...others} = user._doc
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json(err)
    }
});





//follow a user
router.put("/:id/follow",async(req,res)=>{
    
    //paramsdaki id current user body den gelen id takip edilecek user
    if(req.params.id  !==  req.body.userId){
        try {
            const currentUser = await User.findById(req.body.userId); //
            const user = await User.findById(req.params.id);

            // bu kullanıcı daha önceden takip edilmiş mi 

            if(!currentUser.followings.includes(req.params.id)){
                await currentUser.updateOne({
                    $push:{
                        followings:user._id
                    }
                })
                await user.updateOne({
                    $push:{
                        followers:currentUser._id
                    }
                })
                res.status(200).json("You followed successfully")
            }else{
                res.status(403).json("You already follow")
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }else{
        res.status(400).json("You cant follow your account")
    }
})




//unfollow a user
router.put("/:id/unfollow", async (req,res)=>{
   if(req.params.id !== req.body.userId){
        try {
            const currentUser = await User.findById(req.body.userId);
            const user = await User.findById(req.params.id);
            
            if(currentUser.followings.includes(req.params.id)){
                await currentUser.updateOne({
                    $pull:{
                        followings:user._id
                    }
                })
                await user.updateOne({
                    $pull:{
                        followers:currentUser._id
                    }
                })
                res.status(200).json("User has been unfollowed");
            }else{
                res.status(401).json("You are not already following");
            }
           
        } catch (err) {
            res.status(400).json(err);
        }
   }else{
        res.status(400).json("You cant unfollow yourself");
   }
})






export default router;