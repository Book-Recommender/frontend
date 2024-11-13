import React from 'react'
import { GoogleLogout } from 'react-google-login';

const clientId = "955070081730-rlhmrjbj1d4pbabdsjg1b0ps3ac3st0u.apps.googleusercontent.com";

function Logout() {
    const onSuccess = () => {
        console.log("You have logged out successfully!");
    }

    return(
        <div id="logout-button">
            <GoogleLogout
                clientId={clientId}
                buttonText={"Logout"}
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;