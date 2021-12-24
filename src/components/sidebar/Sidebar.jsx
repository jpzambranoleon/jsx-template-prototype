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
                </div>
                <MenuIcon className="menu-icon"/>
            </div>
            <a className="profile">
                <div className="profile-photo">
                    <img src="/assets/person/diana.jpg"/>
                </div>
                <div className="handle">
                    <h4>Diana Ayi</h4>
                    <p className="text-muted">
                        @dayi
                    </p>
                </div>
            </a>
            <ul className="nav-list">
                <li>
                    <a className="menu-item active" href="#">
                        <i><DashboardIcon htmlColor="purple" /></i>
                        <span className="links-name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><PersonIcon htmlColor="goldenrod"/></i>
                        <span className="links-name">User</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><ChatIcon htmlColor='green' /></i>
                        <span className="links-name">Messages</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><AnalyticsIcon htmlColor='tomato'/></i>
                        <span className="links-name">Analytics</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><ColorLensIcon htmlColor='pink' /></i>
                        <span className="links-name">Theme</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><BookmarkIcon htmlColor='blue'/></i>
                        <span className="links-name">Saved</span>
                    </a>
                </li>
                <li>
                    <a className="menu-item" href="#">
                        <i><SettingsIcon htmlColor='grey'/></i>
                        <span className="links-name">Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;