import React from 'react';

function Nav() {
    return(
        <nav className="navbar codyNavFont">
            <a className="navbar-brand" href="index.html">
                
                Cody Blankenship
            </a>
            <ul className="nav justify-content-end ">
                <li className="nav-item">
                <a className="nav-link active" href="../Pages/Home.js">Home</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="aboutme.html">About Me</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="portfolio.html">Portfolio</a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="contact.html">Contact Me</a>
                </li>
            </ul>

        </nav>
    );
}

export default Nav;