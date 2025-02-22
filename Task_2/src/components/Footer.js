import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import facebookIcon from '../images/icons/facebook.png';
import instagramIcon from '../images/icons/instagram.png';
import linkedinIcon from '../images/icons/linkedin.png';
import '../styles/Footer.css';

function Footer() {
     const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location.pathname]); 
                
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="left-column">
                    <div className="logo">WebDev</div>
                    <p>
                        We are always open to discuss your project and improve your online
                        presence.
                    </p>
                </div>
                <div className="right-column">
                    <h2>Let's Talk!</h2>
                    <p>
                        We are always open to discuss your project and improve your online
                        presence.
                    </p>
                                   <div className="social-icons">
                    <a href="https://www.facebook.com/" className="facebook-icon" target="_blank" rel="noopener noreferrer">
                        <img src={facebookIcon} alt="Facebook" />
                    </a>
                    <a href="https://www.instagram.com/" className="instagram-icon" target="_blank" rel="noopener noreferrer">
                        <img src={instagramIcon} alt="Instagram" />
                    </a>
                    <a href="https://www.linkedin.com/" className="linkedin-icon" target="_blank" rel="noopener noreferrer">
                        <img src={linkedinIcon} alt="LinkedIn" />
                    </a>
                </div>
                </div>
            </div>

            <div className="contact-details">
                <div className="contact-left">
                    <h3>Email me at</h3>
                    <p>contact@website.com</p>
                </div>
                <div className="contact-right">
                    <h3>Call us</h3>
                    <p>0927 6277 28525</p>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="copyright">
                    <p>Copyright 2021, Finsweet.com</p>
                </div>
                <div className="footer-links">
                    <Link to="/">Home</Link> 
                    <Link to="/about">About us</Link> 
                </div>
            </div>
        </footer>
    );
}

export default Footer;