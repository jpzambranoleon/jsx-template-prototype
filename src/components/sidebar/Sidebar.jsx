import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import "./sidebar.css"

function Sidebar() {
    let btn = document.querySelector("#btn")
    let sidebar = document.querySelector(".sidebar")

    btn.onclick = function() {
        sidebar.classList.toggle("active");
    }




    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">

                </div>
                <MenuIcon className="menu-icon" id="btn"/>
            </div>
            <ul className="nav-list">
                <li>
                    <a className="menu-item active" href="#">
                        <i><DashboardIcon htmlColor="purple" /></i>
                        <span className="links-name">
                            <h5>Dashboard</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><PersonIcon htmlColor="goldenrod"/></i>
                        <span className="links-name">
                            <h5>User</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><ChatIcon htmlColor='green' /></i>
                        <span className="links-name">
                            <h5>Messages</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><AnalyticsIcon htmlColor='tomato'/></i>
                        <span className="links-name">
                            <h5>Analytics</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><ColorLensIcon htmlColor='pink' /></i>
                        <span className="links-name">
                            <h5>Theme</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><BookmarkIcon htmlColor='blue'/></i>
                        <span className="links-name">
                            <h5>Saved</h5>
                        </span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><SettingsIcon htmlColor='grey'/></i>
                        <span className="links-name">
                            <h5>Settings</h5>
                        </span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;