import "./topbar.css"

function Topbar() {
    return (
        <div className="topbarContainer">
            <div className="topbarCenter">
                <div className="searchbar">
                    <input placeholder="Search for friends, post or video"/>
                </div>
            </div>
            <div className="topbarRight">
                <span className="logo">someSocial</span>
            </div>
        </div>
    )
}

export default Topbar;