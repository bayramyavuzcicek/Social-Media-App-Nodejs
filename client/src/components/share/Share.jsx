import "./share.css"
import {PermMedia,Label, Room, EmojiEmotions} from '@mui/icons-material'
import { useContext, useState } from "react";
import {AuthContext} from '../../context/AuthContext'
import { useRef } from "react";
import axios from 'axios';
export default function Share() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    const { user } = useContext(AuthContext)
    const shareText = useRef()
    const [file , setFile ] = useState(null);


    const handleSubmit = async(e)=>{
        e.preventDefault();
        const post = { 
            description : shareText.current.value,
            userId : user._id
        }
        try{
            if(file){
                const data = new FormData();
                data.append("file",file);
                axios.defaults.baseURL="http://localhost:5000/api";
                await axios.post('/upload',data);
                post.img= file.name;
            }
            
        }catch(err){    
            console.log(err);
        }
        
        try {
            axios.defaults.baseURL="http://localhost:5000/api"
            await axios.post("/posts",post);
            window.location.reload();
        } catch (err) {
            console.log(err)
        }
    }
    




  return (
    <div className="share">
        <div className="shareWrapper">
            <div className="shareTop">
                <img className="shareProfileImg" src={user.profilePicture ? PF+user.profilePicture : `${PF}person/noAvatar.png`} alt="" />
                <input placeholder={`What's in your mind ${user.username}?`} className="shareInput" ref={shareText}/>
            </div>
            <hr className="shareHr"/>
            <form className="shareBottom" onSubmit={handleSubmit}>
                <div className="shareOptions">
                    <label htmlFor="file" className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon"/>
                        <span className="shareOptionText">Photo or Video</span>
                        <input style={{display:"none"}} type="file" id="file" onChange={e=>setFile(e.target.files[0])}/>
                    </label>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon"/>
                        <span className="shareOptionText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon"/>
                        <span className="shareOptionText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon"/>
                        <span className="shareOptionText">Feelings</span>
                    </div>
                </div>
                <button className="shareButton" type="submit">Share</button>
            </form>
        </div>
    </div>
  )
}
