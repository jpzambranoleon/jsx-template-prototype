import "./profilecontainer.css"

function ProfileContainer() {
    return(
        <div className="profile-container">
            <div className="profile-cover-photo" style={{backgroundImage: "url(/assets/cover/cover.jpg)"}}>
                <div className="profile-container-img">
                    <img src="/assets/person/diana.jpg" />
                </div>
            </div>
            <div className="profile-container-name">
                Diana Ayi
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </div>
    )
}

export default ProfileContainer;