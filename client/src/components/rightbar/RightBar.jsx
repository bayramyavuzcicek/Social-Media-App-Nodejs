import "./rightBar.css"
import { Users } from '../../dummyData.js'
import Online from "../online/Online"
export default function RightBar({ profile }) {

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="assets/gift.png" alt="" />
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
    return (
      <>
        <h4 className="rightBarTitle">User Information</h4>
        <div className="rightBarInfo">
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">City:</span>
            <span className="rigtBarInfoValue">Antalya</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">From:</span>
            <span className="rigtBarInfoValue">Turkey</span>
          </div>
          <div className="rightBarInfoItem">
            <span className="rigtBarInfoKey">Relationship:</span>
            <span className="rigtBarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightBarTitle">User Friends</h4>
        <div className="rightBarFollowings">
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/1.jpeg" alt="" />
            <span className="rightBarFollowingName">Emin Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/2.jpeg" alt="" />
            <span className="rightBarFollowingName">Muhammed Fatih Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/3.jpeg" alt="" />
            <span className="rightBarFollowingName">Mehmet Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/4.jpeg" alt="" />
            <span className="rightBarFollowingName">Durmuş Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/5.jpeg" alt="" />
            <span className="rightBarFollowingName">Ramazan Bingül</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src="assets/person/6.jpeg" alt="" />
            <span className="rightBarFollowingName">Yasin Alper Bingül</span>
          </div>
        </div>

      </>
    )

  }

  return (
    <div className="rightBar">
      <div className="rightBarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar/>}
      </div>
    </div>
  )
}
