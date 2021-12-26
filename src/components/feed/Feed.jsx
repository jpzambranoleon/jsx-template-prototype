import "./feed.css"

function Feed() {
    return (
        <div className="feeds">
            <div className="feed">
                <div className="head">
                    <div className="user">
                        <div className="profile-photo">
                            <img src="/assets/person/diana.jpg" />
                        </div>
                        <div className="ingo">
                            <h3>Diana Ayi</h3>
                            <small>Dubai, 15 MINUTES AGO</small>
                        </div>
                    </div>
                    <span className="edit">
                        <i className="uil uil-ellipsis-h"></i>
                    </span>
                </div>

                <div className="photo">
                    <img src="./images/post1.jpg" />
                </div>

                <div className="action-buttons">
                    <div className="interaction-buttons">
                        <span><i className="uil uil-heart"></i></span>
                        <span><i className="uil uil-comment-dots"></i></span>
                        <span><i className="uil uil-share-alt"></i></span>
                    </div>
                    <div className="bookmark">
                        <span><i className="uil uil-bookmark-full"></i></span>
                    </div>
                </div>

                <div className="liked-by">
                    <span><img src="./images/ernest-achiever.jpg" /></span>
                    <span><img src="./images/jane-doe.jpg" /></span>
                    <span><img src="./images/diana-ayi.jpg" /></span>
                    <p>Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b></p>
                </div>

                <div className="caption">
                    <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span class="harsh-tag">#lifestyle</span></p>
                </div>
                <div className="comments text-muted">View all 277 comments</div>
            </div>
        </div>
    )
}

export default Feed;