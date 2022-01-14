import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import SearchIcon from '@mui/icons-material/Search';
import "./messagebox.css"

export default function MessageBox() {
    return(
        <div class="messages">
            <div class="heading">
                <h4>Messages</h4><i><EditOutlinedIcon /></i>
            </div>

            <div class="search-bar">
                <i><SearchIcon /></i>
                <input type="search" placeholder="Search messages" id="message-search" />
            </div>

            <div class="category">
                <h6 class="active">Primary</h6>
                <h6>General</h6>
                <h6 class="message-requests">Requests(7)</h6>
            </div>
            
            <div class="message">
                <div class="profile-photo">
                    <img src="./images/edem-quinst.jpg" />
                </div>
                <div class="message-body">
                    <h5>Edem Quist</h5>
                    <p class="text-muted">Just woke up bruh</p>
                </div>
            </div>
                    
            <div class="message">
                <div class="profile-photo">
                    <img src="./images/franca-deila.jpg" />
                    <div class="active"></div>
                </div>
                <div class="message-body">
                    <h5>Franca Deila</h5>
                    <p class="text-bold">Received bruh. Thanks!</p>
                </div>
            </div>
                
            <div class="message">
                <div class="profile-photo">
                    <img src="./images/jane-doe.jpg" />
                </div>
                <div class="message-body">
                    <h5>Jane Doe</h5>
                    <p class="text-bold">ok</p>
                </div>
            </div>

            <div class="message">
                <div class="profile-photo">
                    <img src="./images/daniella-jackson.jpg" />
                </div>
                <div class="message-body">
                    <h5>Daniella Jackson</h5>
                    <p class="text-bold">2 new messages</p>
                </div>
            </div>
                    
            <div class="message">
                <div class="profile-photo">
                    <img src="./images/juliet-makarey.jpg" />
                </div>
                <div class="message-body">
                    <h5>Juliet Makarey</h5>
                    <p class="text-muted">lol u right</p>
                </div>
            </div>
                    
            <div class="message">
                <div class="profile-photo">
                    <img src="./images/chantel-msiza.jpg" />
                    <div class="active"></div>
                </div>
                <div class="message-body">
                    <h5>Chantel Msiza</h5>
                    <p class="text-bold">Birthday Tomorrow!</p>
                </div>
            </div>
        </div>
    )
}