import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import "./profilecontainer.css"

function ProfileContainer() {
    return(
        <div className="profile-container">
            <div className="profile-cover-photo" style={{backgroundImage: "url(/assets/cover/cover.jpg)"}}>
                <div className="profile-container-img">
                    <img src="/assets/person/diana.jpg" />
                </div>
                <EditOutlinedIcon className="edit-icon" />
            </div>
            <div className="profile-container-name">
                <p className="user-name">
                    Diana Ayi
                </p>
                <p className="user-tag">
                    @dayi
                </p>
            </div>
            <p className="about-profile">
            User Interface Designer and Front-End Developer
            </p>
        </div>
    )
}

export default ProfileContainer;