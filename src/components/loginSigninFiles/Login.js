import React from 'react';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const clientId = "955070081730-rlhmrjbj1d4pbabdsjg1b0ps3ac3st0u.apps.googleusercontent.com";

function Login(){
    const onSuccess = (response) => {
        console.log("LOGIN SUCCESS! Current user: ", response);
    };

    const onFailure = (error) => {
        console.log("LOGIN FAILED! error: ", error);
    };

    return (
        <div>
            <GoogleOAuthProvider clientId={clientId}>
                <GoogleLogin
                    onSuccess={onSuccess}
                    onError={onFailure}
                />
            </GoogleOAuthProvider>
        </div>
    );
}

export default Login;
