import "./feed.css"

function Feed() {
    return (
        <div class="feeds">
            <div class="feed">
                <div class="head">
                    <div class="user">
                        <div class="profile-photo">
                            <img src="/assets/person/diana.jpg" />
                        </div>
                        <div class="ingo">
                            <h3>Diana Ayi</h3>
                            <small>Dubai, 15 MINUTES AGO</small>
                        </div>
                    </div>
                    <span class="edit">
                        <i class="uil uil-ellipsis-h"></i>
                    </span>
                </div>

                <div class="photo">
                    <img src="./images/post1.jpg" />
                </div>

                <div class="action-buttons">
                    <div class="interaction-buttons">
                        <span><i class="uil uil-heart"></i></span>
                        <span><i class="uil uil-comment-dots"></i></span>
                        <span><i class="uil uil-share-alt"></i></span>
                    </div>
                    <div class="bookmark">
                        <span><i class="uil uil-bookmark-full"></i></span>
                    </div>
                </div>

                <div class="liked-by">
                    <span><img src="./images/ernest-achiever.jpg" /></span>
                    <span><img src="./images/jane-doe.jpg" /></span>
                    <span><img src="./images/diana-ayi.jpg" /></span>
                    <p>Liked by <b>Ernest Achiever</b> and <b>2, 323 others</b></p>
                </div>

                <div class="caption">
                    <p><b>Lana Rose</b> Lorem ipsum dolor sit quisquam eius. <span class="harsh-tag">#lifestyle</span></p>
                </div>
                <div class="comments text-muted">View all 277 comments</div>
            </div>
        </div>
    )
}

export default Feed;