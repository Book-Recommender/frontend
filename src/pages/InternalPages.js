import '../styles.css';
import React from 'react';
import NavBar from '../components/NavBar';
import Home from './Home';
import Library from './Library';
import Recommendations from './Recommendations';
import Account from "./Account";
import {Route, Routes} from "react-router-dom"


function InternalPages() {

    return (
        <>
            <NavBar />
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/recommendations" element={<Recommendations />} />
                    <Route path="/account" element={<Account />} />

                </Routes>
            </div>
        </>
    )
}

export default InternalPages;
