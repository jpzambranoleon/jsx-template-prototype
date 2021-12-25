import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <Sidebar />
            </div>
        </>
    );
}

export default Home;