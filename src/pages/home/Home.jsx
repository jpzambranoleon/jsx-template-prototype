import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";

function Home() {
    return (
        <>
            <Navbar />
            <div className="home-container">
                <Sidebar />
                <Header />
            </div>
        </>
    );
}

export default Home;