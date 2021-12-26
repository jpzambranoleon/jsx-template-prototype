import "./stories.css"

function Stories() {
    return(
        <div className="stories">
            <div className="story">
                <div className="story-profile-img">
                    <img src="/assets/person/diana.jpg" />   
                </div>
                <p className="your-story">Your Story</p>
            </div>
            <div className="story">
                <div className="story-profile-img">
                    <img src="/assets/person/diana.jpg" alt="" />   
                </div>
                <p className="your-story">Your Story</p>
            </div>
            <div className="story">
                <div className="story-profile-img">
                    <img src="/assets/person/diana.jpg" alt="" />   
                </div>
                <p className="your-story">Your Story</p>
            </div>
        </div>
    )
}

export default Stories;