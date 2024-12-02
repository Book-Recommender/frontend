import './styles.css'
import React, {useState} from 'react';
import LoginSignup from './components/loginSigninFiles/LoginSignup'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/homepageFiles/Home";
import Library from './pages/Library';
import {Recommendations} from './pages/Recommendations';
import NavBar from "./components/NavBar";

function App() {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin = () => {
        setIsLoggedIn(true);
    };

    return(
        <Router>
            <div className="container">
                {isLoggedIn && <NavBar />}

                <Routes>
                    <Route path="/" element={<LoginSignup onLogin={handleLogin} />} />

                    {isLoggedIn && (
                        <>
                            <Route path="/home" element={<Home/>}/>
                            <Route path="/library" element={<Library/>}/>
                            <Route path="/recommendations" element={<Recommendations/>}/>
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );

}

export default App;
