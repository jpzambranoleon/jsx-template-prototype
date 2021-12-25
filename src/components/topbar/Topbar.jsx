import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "./topbar.css"

function Topbar() {
    return (
        <nav>
            <div class="nav-container">
                <h2 class="log">someSocial</h2>
                <div class="nav-search-bar">
                    <SearchIcon className="search-icon"/>
                    <input type="search" placeholder="Search for creators, inspirations, and projects" />
                </div>
                <div class="nav-create-btn">
                    <Button className="create-btn" variant="outlined">Create</Button>
                    <div class="nav-profile-photo">
                        <img src="/assets/person/diana.jpg" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;