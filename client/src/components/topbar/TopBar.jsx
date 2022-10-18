import './topBar.css'
import { Search, Person, Chat, Notifications } from '@mui/icons-material';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
import { Link } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext'
import { useContext } from 'react';
export default function Topbar() {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  
  const {user} = useContext(AuthContext)
 
  return (
    <div className="topBar">
      <div className="topBarLeft">


        <Link to="/" style={{textDecoration:"none"}}>

          <span className="logo"><SafetyDividerIcon className='topBarRightLogo' />SocialMediaApp</span>
        </Link>
      </div>
      <div className="topBarCenter">
        <div className="searchBar">
          <Search className='searchIcon' />
          <input placeholder='search for friend, post or any video' className="searchInput" />
        </div>
      </div>
      <div className="topBarRight">
        <div className="topBarLinks">
          <span className="topBarLink">Homepage</span>
          <span className="topBarLink">Timeline</span>
        </div>
        <div className="topBarIcons">
          <div className="topBarIconItem">
            <Person />
            <span className="topBarIconBadge">1</span>
          </div>
          <div className="topBarIconItem">
            <Chat />
            <span className="topBarIconBadge">2</span>
          </div>
          <div className="topBarIconItem">
            <Notifications />
            <span className="topBarIconBadge">1</span>
          </div>
        </div>
        <Link to={`/profile/${user.username}`}>
        <img src={user.profilePicture ? PF+user.profilePicture : `${PF}person/noAvatar.png`} alt="" className='topBarImg' />
        
        </Link>
      </div>
    </div>
  )
}
