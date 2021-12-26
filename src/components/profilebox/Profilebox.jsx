import "./profilebox.css"

function Profilebox() {
    return (
        <a className="profile">
            <div className="profile-photo">
                <img src="/assets/person/diana.jpg" />
            </div>
            <div className="handle">
                <h4>Diana Ayi</h4>
                <p className="text-muted">
                    @dayi
                </p>
            </div>
        </a>
    )
}

export default Profilebox;