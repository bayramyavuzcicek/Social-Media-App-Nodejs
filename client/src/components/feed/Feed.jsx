import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios';
import { useContext, useState } from "react";
import { useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";



export default function Feed({username}) {

  //create useState hook
  const [posts ,setPosts] = useState([]);

  const {user} = useContext(AuthContext)
  //create useEffect when the page refreshed this part will gonna work
  useEffect(()=>{
    const fetchPosts = async()=>{
      axios.defaults.baseURL="http://localhost:5000/api/"
      const res = username 
      ? await axios.get("posts/profile/"+username)
      : await axios.get("posts/timeline/"+user._id);
      //setPosts(res.data);
      setPosts(res.data.sort((p1,p2)=>{
        return new Date(p2.createdAt) - new Date(p1.createdAt)
      }))
    }
    fetchPosts();
  },[username,user._id])

  return (
    <div className="feed">
      <div className="feedWrapper">
        {username === user.username && <Share/>}
        {posts.map(p=>(
          <Post key={p._id} post={p}/>         
        ))}
      </div>
    </div>
  )
}
