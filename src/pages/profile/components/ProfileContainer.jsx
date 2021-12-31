import { useState } from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
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
            <div className="profile-description">
                <p>User Interface Designer and Front-End Developer</p>
            </div>
            <div className="skills-container">
                <div className="skills-row">
                    <div className="skills-img">

                    </div>
                    <div className="skills-text-box">
                        <div className="skills-text">
                            <p>HTML</p>
                            <span>90%</span>
                        </div>
                        <div className="skills-bar"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileContainer;