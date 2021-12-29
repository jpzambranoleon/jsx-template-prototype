import GitHubIcon from '@mui/icons-material/GitHub';
import GoogleIcon from '@mui/icons-material/Google';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./profilecard.css"

function ProfileCard() {
    return(
        <div className="profile-card-container">
            <div className="cover-photo" style={{backgroundImage: "url(/assets/cover/cover.jpg)"}}>
                <div className="profile-img">
                    <img src="/assets/person/diana.jpg" />
                </div>
            </div>
            <div className="profile-name">
                Diana Ayi
                <p className="text-muted">
                    @dayi
                </p>
            </div>
            <div className="profile-links">
                <a className="links-icon">
                    <GoogleIcon />
                </a>
                <a className="links-icon">
                    <LinkedInIcon />
                </a>
                <a className="links-icon">
                    <GitHubIcon />  
                </a>
            </div>
            <p className="about">
              User Interface Designer and <br/> Front-End Developer 
            </p>
            <div className="card-footer">
                <div className="numbers">
                    <div className="item">
                        <span>120</span>
                        Posts
                    </div>
                    <div className="border"></div>
                    <div className="item">
                        <span>127</span>
                        Following
                    </div>
                    <div className="border"></div>
                    <div className="item">
                        <span>120K</span>
                        Followers
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard;