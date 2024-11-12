import React from 'react';
import {Link, useMatch, useResolvedPath} from "react-router-dom"

export default function NavBar() {
    return (
        <nav className="nav">
            <Link to="/" className="site-title">Book Club</Link>
            <ul>
                <CustomLink to="/library">Library</CustomLink>
                <CustomLink to="/recommendations">Recommendations</CustomLink>
                <CustomLink to="/account">Account</CustomLink>
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
