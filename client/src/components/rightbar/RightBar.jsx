import "./rightBar.css"
import { Users } from '../../dummyData.js'
import Online from "../online/Online"
import { useContext, useEffect } from "react";
import axios from 'axios';
import { useState } from "react";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';



export default function RightBar({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const HomeRightBar = () => {
    

    

    return (
      <>
              
        <div className="birthdayContainer">
          <img className="birthdayImg" src={`${PF}gift.png`} alt="" />
          <span className="birthdayText">Bugün <b>Emin Kartcı</b> ve <b>3 diğer arkadaşının</b> doğum günü. </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>

        <ul className="rightBarfriendList">

          {Users.map(u => (
            <Online key={u.id} user={u} />
          ))}

        </ul>
      </>
    )
  }

  const ProfileRightBar = () => {
    const {user:currentUser} = useContext(AuthContext)
    const [friends , setFriends] = useState([])
    const [followed , setFollowed] = useState(false);

    useEffect(()=>{
      setFollowed(currentUser.followings.includes(user?.id))
    },[currentUser, user.id])

    useEffect(()=>{
      console.log(user._id)
      const getFriends = async()=>{
        try {
          axios.defaults.baseURL="http://localhost:5000/api/users";
          const res = await axios.get("/friends/"+ user._id);
          setFriends(res.data)
        } catch (err) {
          console.log(err)
        }
      }
      getFriends();
    },[user._id]);
    const handleFollow = async ()=>{
        try {
              axios.defaults.baseURL="http://localhost:5000/api/users/";
            if(followed){
              
              await axios.put(user._id + "/follow",{userId: currentUser._id})
            }
            else{
              await axios.put(user._id + "/unfollow",{userId: currentUser._id})
            }
            
           
        } catch (err) {
            console.log(err)
        }
        setFollowed(!followed)
    }
    return (
      <>
        {user.username !== currentUser.username && (
          <button className="rightBarFollowButton" onClick={handleFollow}>
            
            {followed ? "Unfollow" : "Follow +"}
            
            
          </button>
        )}
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">City:</span>
            <span className="rigtBarInfoValue">{user.city}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">From:</span>
            <span className="rigtBarInfoValue">{user.from}</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">Relationship:</span>
            <span className="rigtBarInfoValue">
              {user.relationship === 1
                ? "Single"
                : user.relationship === 2
                ? "Married"
                :
                "-"
              }
            </span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          {friends.map((friend)=>(
            <Link to={"/profile/"+friend.username} style={{textDecoration:"none"}}>
              <div className="rightBarFollowing" key={friend._id}>
                <img className="rightBarFollowingImg" src={friend.profilePicture ? PF+friend.profilePicture :  `${PF}/person/noAvatar.png`} alt="" />
                <span className="rightBarFollowingName">{friend.username}</span>
              </div>
            </Link>
          ))}
          

        </div>

      </>
    )

  }

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {user ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  )
}
