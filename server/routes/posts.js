import Post from '../models/Post.js';
import User from '../models/User.js';
import express from 'express';

const router = express.Router();


//Create a Post
router.post("/", async(req,res)=>{
    const newPost = new Post(req.body);
    try {
        const createadPost = await newPost.save(); 
        res.status(200).json(createadPost);
    } catch (err) {
        res.status(500).json(err)
    }
});


//Delete Post
router.delete("/:id", async(req,res)=>{
    
    const post = await Post.findById(req.params.id);
    if(req.body.userId === post.userId){
        await Post.findByIdAndDelete(post._id);
        res.json("Your post has been deleted");
    }else{
        res.jsonp("You can delete only your posts!");
    }
});

//Update Post
router.put("/:id", async(req,res)=>{

    try {
        const post  = await Post.findById(req.params.id);
        if(req.body.userId === post.userId){
            const updatedPost = await Post.findByIdAndUpdate(req.params.id,{
                $set:req.body
            },{new:true})
            res.status(200).json(updatedPost);
        }
        else{
            res.status(403).json("You can update only your posts!"); // 403 istenen kaynapa erişim yasağı
        }
    } catch (err) {
        res.status(500).json(err)
    }
    
});


//like-dislike
router.put('/:id/like',async(req,res)=>{
    try {
        //postu bul
        const post = await Post.findById(req.params.id);

            //kullanıcı daha önceden bu postu beğenmişmi
            if(!post.likes.includes(req.body.userId)){
                //beğenmemişse likes ı güncelle
                await post.updateOne({
                    $push:{
                        likes:req.body.userId
                    }
                })
                res.status(200).json("You liked this post")
            }else if(post.likes.includes(req.body.userId)){
                //dislike at
                await post.updateOne({
                    $pull:{
                        likes: req.body.userId
                    }
                })
                res.status(200).json("You disliked this post")
            }else{
                res.status(400).json("You already like this post")
            }
        
    } catch (err) {
        res.status(500).json(err);
    }
})

//get A Post
router.get("/:id", async(req,res)=>{
    
    try {
        const post = await Post.findById(req.params.id);
        !post && res.status(404).json("Post has not been found");
        res.status(200).json(post)
    } catch (err) {
        res.status(500).json(err)
    }
});

//Get timeline posts

router.get("/timeline/:userId", async(req,res)=>{
    
   try {
         //current user
        const currentUser = await User.findById(req.params.userId);
       
        //currentuser posts
        const userPosts = await Post.find({userId:currentUser._id});
        
        //friends posts
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId)=>{
                return Post.find({userId:friendId});
            })
        );
        
    res.status(200).json(userPosts.concat(...friendPosts));
   } catch (err) {
        res.status(500).json(err)
   }


})

export default router;