import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import FolderIcon from '@mui/icons-material/Folder';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <div className="logo-name">someSocial</div>
                </div>
                <MenuIcon className="menu-icon"/>
            </div>
            <ul className="nav-list">
                <li>
                    <a href="menu-item active">
                        <i><DashboardIcon htmlColor="purple" /></i>
                        <span className="links-name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><PersonIcon htmlColor="goldenrod"/></i>
                        <span className="links-name">User</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><ChatIcon htmlColor='green' /></i>
                        <span className="links-name">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><AnalyticsIcon htmlColor='tomato'/></i>
                        <span className="links-name">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><ColorLensIcon htmlColor='pink' /></i>
                        <span className="links-name">Theme</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><BookmarkIcon htmlColor='blue'/></i>
                        <span className="links-name">Saved</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <i><SettingsIcon htmlColor='grey'/></i>
                        <span className="links-name">Settings</span>
                    </a>
                </li>
            </ul>
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-details">
                        <img src="/assets/person/diana.jpg" alt="" />
                        <div className="name-job">
                            <div className="name">Diana Ayi</div>
                            <div className="job">Front-end Developer</div>
                        </div>
                    </div>
                    <LogoutOutlinedIcon className="log-out"/>
                </div>
            </div>
        </div>
    )
}

export default Sidebar;