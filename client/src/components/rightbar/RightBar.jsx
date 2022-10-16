import "./rightBar.css"
import {Users} from '../../dummyData.js'
import Online from "../online/Online"
export default function RightBar() {
  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
          <span className="birthdayText">Bugün <b>Emin Kartcı</b> ve <b>3 diğer arkadaşının</b> doğum günü. </span>
        </div>
        <img src="assets/ad.png" alt="" className="rightBarAd" />
        <h4 className="rightBarTitle">Online Friends</h4>
        
        <ul className="rightBarfriendList">

          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
  
        </ul>          
      </div>
    </div>
  )
}
