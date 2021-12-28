import TopBar from "../../components/topbar/TopBar";
import Feed from "../../components/feed/Feed";
import "./home.css"
import Share from "../../components/share/Share";
import SideBar from "../../components/sidebar/SideBar";
import ProfileCard from "../../components/profilecard/ProfileCard";

function Home() {
    return (
        <>
            <TopBar />
            <main>
                <SideBar />
                <div className="container">
                    <div className="left">
                        <ProfileCard />
                    </div>
                    <div className="middle">
                        <Share />
                        <Feed />
                    </div>
                    <div className="right">
                        <div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi saepe ipsum doloribus libero id nisi reiciendis, nemo recusandae consectetur at debitis, autem incidunt sapiente assumenda minima consequuntur, veritatis corporis officia.
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;