import './profile.css'
import TopBar from '../../components/topbar/TopBar'
import SideBar from '../../components/sidebar/SideBar'
import Feed from '../../components/feed/Feed'
import RightBar from '../../components/rightbar/RightBar'
export default function Profile() {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;
    return (
        <>
            <TopBar />
            <div className="profile">
                <SideBar />
                <div className="profileRight">
                    <div className="profileRightTop">
                        <div className="profileCover">
                            <img className='profileCoverImg' src={`${PF}post/3.jpeg`} alt="" />
                            <img className='profileUserImg' src={`${PF}person/avatar.png`} alt="" />
                        </div>
                        <div className="profileInfo">
                            <h4 className='profileInfoName'>Bayram Yavuz ÇİÇEK</h4>
                            <span className='profileInfoDesc'>Hello my friends!</span>
                        </div>
                    </div>
                    <div className="profileRightBottom">
                        <Feed />
                        <RightBar />
                    </div>
                </div>
            </div>
        </>
    )
}
