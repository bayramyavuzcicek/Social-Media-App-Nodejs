import './topBar.css'
import {Search,Person,Chat,Notifications} from '@mui/icons-material';
import SafetyDividerIcon from '@mui/icons-material/SafetyDivider';
export default function Topbar() {
  return (
    <div className="topBar">
     <div className="topBarLeft">
      
        
      
      <span className="logo"><SafetyDividerIcon className='topBarRightLogo'/>SocialMediaApp</span>
     </div>
     <div className="topBarCenter">
      <div className="searchBar">
        <Search className='searchIcon'/>
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
          <Person/>
          <span className="topBarIconBadge">1</span>
        </div>
        <div className="topBarIconItem">
          <Chat/>
          <span className="topBarIconBadge">2</span>
        </div>
        <div className="topBarIconItem">
          <Notifications/>
          <span className="topBarIconBadge">1</span>
        </div>
      </div>
      <img src="/assets/person/1.jpeg" alt="" className='topBarImg'/>
     </div>
    </div>
  )
}
