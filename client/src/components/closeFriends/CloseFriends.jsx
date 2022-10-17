import "./closeFriends.css"

export default function CloseFriends({user}) {
    return (
        <li className="sideBarFriend">
            <img src={user.profilePicture} alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">{user.username}</span>
        </li>
    )
}
