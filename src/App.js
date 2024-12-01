import './styles.css'
import React from 'react';
import LoginSignup from './components/loginSigninFiles/LoginSignup'
import InternalPages from "./pages/InternalPages";
import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./components/loginSigninFiles/Login";

function App() {

    return(
        <div>
            <InternalPages />
        </div>
    )

}

export default App;
