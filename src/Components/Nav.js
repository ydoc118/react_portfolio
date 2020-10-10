import React from 'react';


function Nav() {
    return(
        <nav className="navbar codyNavFont">
            <a className="navbar-brand" href="/react_portfolio">
                
                Cody Blankenship
            </a>
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                <a className="nav-link active" href="/react_portfolio">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/aboutMe">About Me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/portfolio">Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/contact">Contact Me</a>
                </li>
            </ul>

        </nav>
    );
}

export default Nav;