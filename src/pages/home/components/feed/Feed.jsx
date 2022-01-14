import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import "./feed.css"

export default function Feed() {
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
                        <MoreHorizIcon />
                    </span>
                </div>

                <div className="photo">
                    <img src="/assets/post/post5.jpg" />
                </div>

                <div className="action-buttons">
                    <div className="interaction-buttons">
                        <span><FavoriteBorderIcon /></span>
                        <span><MessageOutlinedIcon /></span>
                        <span><ShareOutlinedIcon /></span>
                    </div>
                    <div className="bookmark">
                        <span><BookmarkBorderIcon /></span>
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