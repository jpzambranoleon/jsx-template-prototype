import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

function Home() {
    return (
        <>
            <Topbar />
            <div className="home-container">
                <Sidebar />
            </div>
        </>
    );
}

export default Home;