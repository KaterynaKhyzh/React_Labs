import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

function Header() {
    return (
        <header className="header">
            <nav className="nav">
                <div className="logo">
                    <Link to="/">WebDev</Link>
                </div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact" className="contact-link">Contact us</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;