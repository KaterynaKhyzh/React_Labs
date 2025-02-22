import React from 'react';
import webImage from '../images/web.png'; 
import '../styles/Hero.css';

function Hero() {
    return (
        <section className="hero-container ">
            <div className="hero">
                <h1>Building stellar websites for early startups</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <div className="buttons">
                    <button>View our work</button>
                    <button>View Pricing</button>
                </div>
            </div>
            <img className="hero-image" src={webImage} alt="Web" />
        </section>
    );
}

export default Hero;