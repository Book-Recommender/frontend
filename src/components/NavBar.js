import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"
import "../styles.css";

export default function NavBar() {
    return (
        <nav className="nav">
            <ul>
                <CustomLink to="/home" className="site-title">Book Club</CustomLink>
                <CustomLink to="/library">Library</CustomLink>
                <CustomLink to="/recommendations">Recommendations</CustomLink>
            </ul>
        </nav>
    )
}

function CustomLink({to, children, ...props}){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active" : ""}>
            <Link to={to}{...props}>
                {children}
            </Link>
        </li>
    )
}
