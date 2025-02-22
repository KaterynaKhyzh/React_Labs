import React from 'react';
import '../styles/HowWeWork.css';

function HowWeWork() {
    return (
        <section className="how-we-work">
            <div className="get-in-touch">
                <h2>How we work</h2>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor.
                </p>
                <a href="/" className="get-in-touch-link">Get in touch with us →</a>
            </div>

            <div className="work-steps">
                <div className="step">
                    <div className="step-number">01</div>
                    <h3>Strategy</h3>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                        aliquam.
                    </p>
                </div>

                <div className="step">
                    <div className="step-number">02</div>
                    <h3>Wireframing</h3>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                        aliquam.
                    </p>
                </div>

                <div className="step">
                    <div className="step-number">03</div>
                    <h3>Design</h3>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                        aliquam.
                    </p>
                </div>

                <div className="step">
                    <div className="step-number">04</div>
                    <h3>Development</h3>
                    <p>
                        Euismod faucibus turpis eu gravida mi. Pellentesque et velit
                        aliquam.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default HowWeWork;