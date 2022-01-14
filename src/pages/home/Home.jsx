import TopBar from "../../components/topbar/TopBar";
import Feed from "./components/feed/Feed";
import "./home.css"
import Share from "./components/share/Share";
import Sidebar from "../../components/sidebar/SideBar";
import ProfileCard from "./components/profilecard/ProfileCard";
import MessageBox from "./components/messagebox/MessageBox";
import ProjectBox from "./components/projectbox/ProjectBox";

export default function Home() {
    return (
        <>
            <TopBar />
            <main>
                
                <div className="container">
                    <div className="left">
                        <ProfileCard />
                    </div>
                    <div className="middle">
                        <Share />
                        <Feed />
                    </div>
                    <div className="right">
                        <ProjectBox />
                    </div>
                </div>
            </main>
        </>
    );
}