import "./createpost.css"

function CreatePost() {
    return(
        <form className="create-post">
            <div className="profile-photo">
                <img src="/assets/person/diana.jpg" />
            </div>
            <input type="text" placeholder="What's on your mind, Diana?" id="create-post" />
            <input type="submit" value="Post" class="btn btn-primary" />
        </form>
    )
}

export default CreatePost;