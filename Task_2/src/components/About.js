import React from 'react';
import teamImage from '../images/team_1.jpeg';
import misionImage from '../images/mision.jpeg';
import visionImage from '../images/vision.jpeg';
import '../styles/About.css';

function About() {
    return (
        <div className="about-page">
            <section className="about-us">
                <div className="about-us-content">
                    <div className="about-us-left">
                        <h3>About us</h3>
                        <h2>Our designs solve problems</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam.
                        </p>
                    </div>
                    <div className="about-us-image">
                        <img src={teamImage} alt="Team" />
                    </div>
                </div>
                <div className="about-us-goals">
                    <div className="goal">
                        <h3>Goal focussed</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="goal">
                        <h3>Continuous improvement</h3>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>

            <section className="process">
                <h2>The process we follow</h2>
                <div className="process-steps">
                    <div className="step">
                        <div className="dot"></div>
                        <h3>Planning</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elit.</p>
                    </div>
                    <div className="step">
                        <div className="dot"></div>
                        <h3>Conception</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</p>
                    </div>
                    <div className="step">
                        <div className="dot"></div>
                        <h3>Design</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elite.</p>
                    </div>
                    <div className="step">
                        <div className="dot"></div>
                        <h3>Development</h3>
                        <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitt.</p>
                    </div>
                </div>
            </section>

            <section className="mission-vision">
                <div className="mission-vision-container">
                    <div className="mission">
                        <h3>Our Mission</h3>
                        <h2>Inspire, Innovate, Share</h2>
                        <img src={misionImage} alt="Mission" className="mission-image" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div className="vision">
                        <h3>Our Vision</h3>
                        <h2>Laser focus</h2>
                        <img src={visionImage} alt="Vision" className="vision-image" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default About;