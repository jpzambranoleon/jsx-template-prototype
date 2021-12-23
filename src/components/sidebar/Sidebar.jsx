import "./sidebar.css"

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <ul className="sidebarList">
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Dashboard</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Icons</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">Maps</span>
                    </li>
                    <li className="sidebarListItem">
                        <span className="sidebarListItemText">User Profile</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar;