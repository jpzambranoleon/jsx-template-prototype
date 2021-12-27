import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "./topbar.css"

function Topbar() {
    return (
        <nav>
            <div className="container">
                <h2 className="log">someSocial</h2>
                <div className="search-bar">
                    <i className="uil uil-search"></i>
                    <input type="search" placeholder="Search for creators, inspirations, and projects" />
                </div>
                <div className="create">
                    <label className="btn btn-primary" for="create-post">Create</label>
                    <div className="profile-photo">
                        <img src="/assets/person/diana.jpg" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;