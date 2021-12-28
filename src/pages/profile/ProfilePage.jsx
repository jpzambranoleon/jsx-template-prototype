import TopBar from "../../components/topbar/TopBar";
import "./profilepage.css"


function ProfilePage() {
    return(
        <>
            <TopBar />
            <main>
                <div className="profile-page-container">
                    <div className="profile-page-left">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt qui distinctio velit est omnis in saepe repellat rerum tempore reprehenderit eveniet, sit vero non repellendus consectetur, perspiciatis nemo? Accusantium, optio!
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