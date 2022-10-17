import "./closeFriends.css"

export default function CloseFriends({user}) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <li className="sideBarFriend">
            <img src={PF+user.profilePicture} alt="" className="sideBarFriendImg" />
            <span className="sideBarFriendName">{user.username}</span>
        </li>
    )
}
