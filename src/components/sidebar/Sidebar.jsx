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
                            <i className="bx bx-grid-alt" ></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;