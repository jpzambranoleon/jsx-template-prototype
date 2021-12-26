import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import "./topbar.css"

function Topbar() {
    return (
        <nav>
            <div class="container">
                <h2 class="log">someSocial</h2>
                <div class="search-bar">
                    <i class="uil uil-search"></i>
                    <input type="search" placeholder="Search for creators, inspirations, and projects" />
                </div>
                <div class="create">
                    <label class="btn btn-primary" for="create-post">Create</label>
                    <div class="profile-photo">
                        <img src="/assets/person/diana.jpg" />
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Topbar;