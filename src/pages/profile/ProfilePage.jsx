import TopBar from "../../components/topbar/TopBar";
import ProfileContainer from "./components/ProfileContainer";
import "./profilepage.css"


function ProfilePage() {
    return(
        <>
            <TopBar />
            <main>
                <div className="profile-page-container">
                    <div className="profile-page-left">
                        <ProfileContainer />
                    </div>
                    <div className="profile-page-right">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam veritatis doloremque temporibus atque cum maiores beatae consequuntur, quod itaque, molestiae sed, repellendus aspernatur rerum quaerat deleniti illum ipsa minima excepturi.
                    </div>
                </div>
            </main>
        </>
    )
}

export default ProfilePage;