import SearchIcon from '@mui/icons-material/Search';
import "./navbar.css"

function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-left">
                <span className="navbar-link">Dashboard</span>
            </div>
            <div className="navbar-center">
                <div className="searchbar">
                    <SearchIcon />
                    <input type="search" placeholder="Search for creators, inspirations, and projects" className="search-input" />
                </div>
            </div>
            <div className="navbar-right">
                <div className="navbar-profile-photo">
                    <img src="/assets/person/diana.jpg" alt="" />
                </div>
                <span className="username">
                    <h4>Diana Ayi</h4>
                </span>
            </div>
        </div>
    )
}

export default Navbar;