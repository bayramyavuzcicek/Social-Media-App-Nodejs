import "./sideBar.css";
import BookmarkIcon from '@mui/icons-material/Bookmark';
import {Group , Chat, HelpOutline , Event , School , WorkOutline , PlayCircleFilledOutlined , RssFeed} from '@mui/icons-material'
export default function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarWrapper">
        <ul className="sideBarList">
          <li className="sideBarListItem">
          <RssFeed className="sideBarIcon"/>
            <span className="sideBarListItemText">Feed</span>
          </li>
          <li className="sideBarListItem">
            <Chat className="sideBarIcon"/>
            <span className="sideBarListItemText">Chats</span>
          </li>
          <li className="sideBarListItem">
            <PlayCircleFilledOutlined className="sideBarIcon"/>
            <span className="sideBarListItemText">Videos</span>
          </li>
          <li className="sideBarListItem">
            <Group className="sideBarIcon"/>
            <span className="sideBarListItemText">Groups</span>
          </li>
          <li className="sideBarListItem">
            <BookmarkIcon className="sideBarIcon"/>
            <span className="sideBarListItemText">Bookmarks</span>
          </li>
          <li className="sideBarListItem">
            <HelpOutline className="sideBarIcon"/>
            <span className="sideBarListItemText">Questions</span>
          </li>
          <li className="sideBarListItem">
            <WorkOutline className="sideBarIcon"/>
            <span className="sideBarListItemText">Jobs</span>
          </li>
          <li className="sideBarListItem">
            <Event className="sideBarIcon"/>
            <span className="sideBarListItemText">Events</span>
          </li>
          <li className="sideBarListItem">
            <School className="sideBarIcon"/>
            <span className="sideBarListItemText">Courses</span>
          </li>
        </ul>
        <button className="sideBarButton">Show More</button>
        <hr className="sideBarHr"/>
        <ul className="sideBarFriendList">
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
          <li className="sideBarFriend">
            <img src="assets/person/2.jpeg" alt="" className="sideBarFriendImg"/>
            <span className="sideBarFriendName">Emin Kartcı</span>
          </li>
        </ul>
      </div>
    </div>
  )
}
