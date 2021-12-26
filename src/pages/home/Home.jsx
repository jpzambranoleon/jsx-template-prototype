import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import Stories from "../../components/stories/Stories";
import Profilebox from "../../components/profilebox/Profilebox";

function Home() {
    return (
        <>
            <Topbar />
            <main>
                <div className="container">
                    <div className="left">
                        <Profilebox />
                    </div>
                    <div className="middle">

                    </div>
                    <div className="right">

                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;