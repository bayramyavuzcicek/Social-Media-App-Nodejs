import Post from "../post/Post"
import Share from "../share/Share"
import "./feed.css"
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";



export default function Feed({username}) {

  //create useState hook
  const [posts ,setPosts] = useState([]);

  //create useEffect when the page refreshed this part will gonna work
  useEffect(()=>{
    const fetchPosts = async()=>{
      axios.defaults.baseURL="http://localhost:5000/api/"
      const res = username 
      ? await axios.get("posts/profile/"+username)
      : await axios.get("posts/timeline/634a6bd0bd6d82abb1cc4fc3");
      //setPosts(res.data);
      setPosts(res.data)
    }
    fetchPosts();
  },[username])

  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share/>
        {posts.map(p=>(
          <Post key={p._id} post={p}/>         
        ))}
      </div>
    </div>
  )
}
