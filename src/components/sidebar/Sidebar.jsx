import MenuIcon from '@mui/icons-material/Menu';
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import SettingsIcon from '@mui/icons-material/Settings';
import "./sidebar.css"

export default function SideBar() {
    
    /* 
    let btn = document.querySelector("#btn");
    let sidebar = document.querySelector(".sidebar");

    btn.onclick = function() {
        sidebar.classList.toggle("active");
    } 
    */

    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">

                </div>
                <MenuIcon className="menu-icon" id="btn"/>
            </div>
            <a className="menu-item active">
                <span><i><DashboardIcon htmlColor="purple"/></i></span><h5>Dashboard</h5>
            </a>
            <a className="menu-item">
                <span><i><PersonIcon htmlColor="goldenrod"/></i></span><h5>User</h5>
            </a>
            <a className="menu-item" id="notifications">
                <span><i><ChatIcon htmlColor="green" /></i></span><h5>Messages</h5>
            </a>
            <a className="menu-item" id="messages-notification">
                <span><i><AnalyticsIcon htmlColor="tomato" /></i></span><h5>Analytics</h5>
            </a>
            <a className="menu-item" id="theme">
                <span><i><ColorLensIcon htmlColor="pink" /></i></span><h5>Theme</h5>
            </a>
            <a className="menu-item">
                <span><i><BookmarkIcon htmlColor="blue" /></i></span><h5>Saved</h5>
            </a>
            <a className="menu-item">
                <span><i><SettingsIcon htmlColor="grey" /></i></span><h5>Settigs</h5>
            </a>
        </div>
    )
}