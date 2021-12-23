import MenuIcon from '@mui/icons-material/Menu';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import PieChartOutlineIcon from '@mui/icons-material/PieChartOutline';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <div className="logo-name">someSocial</div>
                </div>
                <MenuIcon />
            </div>
            <ul className="nav-list">
                <li>
                    <SearchIcon />
                    <input type="text" placeholder="Search..." /> 
                </li>
                <li>
                    <a href="#">
                        <GridViewIcon />
                        <span className="links-name">Dashboard</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <PersonOutlineIcon />
                        <span className="links-name">User</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ChatBubbleOutlineIcon />
                        <span className="links-name">Messages</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <PieChartOutlineIcon />
                        <span className="links-name">Analytics</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <FolderOpenIcon />
                        <span className="links-name">File Manager</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <ColorLensOutlinedIcon />
                        <span className="links-name">Theme</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <BookmarkBorderIcon />
                        <span className="links-name">Saved</span>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <SettingsOutlinedIcon />
                        <span className="links-name">Settings</span>
                    </a>
                </li>
            </ul>
            <div className="profile-content">
                <div className="profile">
                    <div className="profile-details">
                        {/* <img src="/assets/person/diana.jpg" alt="" /> */}
                        <div className="name-job">
                            <div className="name">Diana Ayi</div>
                            <div className="job">Front-end Developer</div>
                        </div>
                    </div>
                    <LogoutOutlinedIcon />
                </div>
            </div>
        </div>
    )
}

export default Sidebar;