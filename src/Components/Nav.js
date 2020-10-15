import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
    return(
        <nav className="navbar codyNavFont">
            <Link className="navbar-brand" to="/">
                
                Cody Blankenship
            </Link>
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/aboutMe">About Me</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/portfolio">Portfolio</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/contact">Contact Me</Link>
                </li>
            </ul>

        </nav>
    );
}

export default Nav;