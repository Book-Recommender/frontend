import userIcon from "../../images/person.png";
import emailIcon from "../../images/email.png";
import React from "react";
import './Profile.css';

const Profile = () => {

    return (

        <div className="container-profile">
            <div className="header-profile">
                <div className="text">Profile</div>
                <div className="underline-profile"></div>
            </div>
            <div className="inputs-profile">
                <div className="input-profile">
                    <img src={userIcon} alt=""/>
                    <p style={{color: '#ef758a'}}>Username: avid_bookreader</p>
                </div>
                <div className="input-profile">
                    <img src={emailIcon} alt=""/>
                    <p style={{color: '#ef758a'}}>Email: example@gmail.com </p>
                </div>
            </div>
        </div>
    )
}

export default Profile;