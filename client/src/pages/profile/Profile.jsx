import './profile.css'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
import {useEffect, useState} from 'react';
import {useParams} from 'react-router'
import axios from 'axios';
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    const [user, setUser] = useState({});
    const username = useParams().username;
   
    //fetch Users
    useEffect(() => {
        const fetchUser = async () => {
        axios.defaults.baseURL = "http://localhost:5000/api"
        const res = await axios.get(`/users?username=${username}`);
        setUser(res.data)
        }
        fetchUser();
    }, [username])


    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={user.coverPicture ? PF+user.coverPicture : PF+"person/noCover.png"} alt="" />
                            <img className='profileUserImg' src={user.profilePicture ? PF+user.profilePicture : PF+"person/noAvatar.png"} alt="" />
                        </div>
                        <div className="profileInfo"> 
                            <h4 className='profileInfoName'>{user.username}</h4>
                            <span className='profileInfoDesc'>{user.description}</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed username={username}/>
                        <RightBar user={user}/>
                    </div>
                </div>
            </div>
        </>
    )
}
