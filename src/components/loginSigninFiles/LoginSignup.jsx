import React, {useState, useEffect} from 'react'
import './LoginSignup.css'
import emailIcon from '../../images/email.png'
import passwordIcon from '../../images/password.png'
import userIcon from '../../images/person.png'
import LoginButton from './Login'
import {gapi} from 'gapi-script'

const clientId = "955070081730-rlhmrjbj1d4pbabdsjg1b0ps3ac3st0u.apps.googleusercontent.com";

const LoginSignup = () => {

    useEffect(() => {
        function start() {
            gapi.client.init({
                clientId: clientId,
                scope: ""
            })
        };
        gapi.load('client:auth2', start);
    })

    const [action, setAction] = useState("Login");


    return(
        <body>
            <div class="left-side">
                <h1>Book Club</h1>
                <p>Welcome to Book Club! Book Club was created by readers, for readers, to give personalized recommendations based on readers like you.</p>
                <p>Please make an account using our sign up on the right, and let's get started!</p>
            </div>
            <div className="container">
                <div className="header">
                    <div className="text">{action}</div>
                    <div className="underline"></div>
                </div>
                <div className="inputs">
                    {action === "Login" ? <div></div>
                        :
                        <div className="input">
                            <img src={userIcon} alt=""/>
                            <input type="text" placeholder="Username"/>
                        </div>
                    }
                    <div className="input">
                        <img src={emailIcon} alt=""/>
                        <input type="email" placeholder="Email"/>
                    </div>
                    <div className="input">
                        <img src={passwordIcon} alt=""/>
                        <input type="password" placeholder="Password"/>
                    </div>
                    <div className="google-login">
                        <p>Login with Google<LoginButton /></p>
                    </div>
                </div>
                {action === "Sign Up" ? <div></div>
                    : <div className="forgot-password">Lost password? <span>Click here!</span></div>
                }
                <div className="submit-container">
                    <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {
                        setAction("Sign Up")
                    }}>Sign Up
                    </div>
                    <div className={action === "Sign Up" ? "submit gray:" : "submit"} onClick={() => {
                        setAction("Login")
                    }}>Login
                    </div>
                </div>
            </div>
        </body>
    )
}

export default LoginSignup