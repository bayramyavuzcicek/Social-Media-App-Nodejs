import "./rightBar.css"
import { Users } from '../../dummyData.js'
import Online from "../online/Online"
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
    return (
      <>
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
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/1.jpeg`} alt="" />
            <span className="rightBarFollowingName">Emin Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/2.jpeg`} alt="" />
            <span className="rightBarFollowingName">Muhammed Fatih Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/3.jpeg`} alt="" />
            <span className="rightBarFollowingName">Mehmet Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/4.jpeg`} alt="" />
            <span className="rightBarFollowingName">Durmuş Kartcı</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/5.jpeg`} alt="" />
            <span className="rightBarFollowingName">Ramazan Bingül</span>
          </div>
          <div className="rightBarFollowing">
            <img className="rightBarFollowingImg" src={`${PF}/person/6.jpeg`} alt="" />
            <span className="rightBarFollowingName">Yasin Alper Bingül</span>
          </div>
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
