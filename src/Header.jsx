import React from 'react';
import { Link } from 'react-router-dom';



const Header = () => {
    return (
        <nav className="nav-bar ">
            <ul className="nav-list animate__animated animate__bounceInDown">
                <li><Link to="/" className="nav-link">Home</Link></li>
                <li><Link to="/complete" className="nav-link">Complete</Link></li>
                <li><Link to="/delete" className="nav-link">Delete</Link></li>
                <li><Link to="/archive" className="nav-link">Archive</Link></li>

  



            </ul>
        </nav>
    );
};

export default Header;
