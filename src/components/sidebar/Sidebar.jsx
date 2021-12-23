import GridViewIcon from '@mui/icons-material/GridView';
import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="logo-content">
                <div className="logo">
                    <div className="logo-name">someSocial</div>
                    <i className="bx bx-menu"></i>
                </div>
                <ul className="nav-list">
                    <li>
                        <a href="#">
                            <GridViewIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;