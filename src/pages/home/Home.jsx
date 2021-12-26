import Profilebox from "../../components/profilebox/Profilebox";
import Topbar from "../../components/topbar/Topbar";
import Stories from "../../components/stories/Stories";
import "./home.css"

function Home() {
    return (
        <>
            <Topbar />
            <main>
                <div className="container">
                    <div className="left">

                    </div>
                    <div className="middle">
                        <Stories />
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