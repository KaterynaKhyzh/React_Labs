import React, { useState } from 'react';
import jennyImage from '../images/Jenny.jpg';
import johnImage from '../images/John.jpg';
import '../styles/Testimonials.css';

function Testimonials() {
    const quotes = [
        {
            quote: "The best agency we've worked with so far. They understand our product and are able to add new features with a great focus.",
            author: "Jenny Wilson",
            title: "Vice President",
            image: jennyImage,
        },
        {
            quote: "An outstanding agency! They grasp our product perfectly and enhance it with well-thought-out features, always maintaining a strong focus on quality.",
            author: "John Doe",
            title: "CEO",
            image: johnImage, 
        },

    ];

    const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === 0 ? quotes.length - 1 : prevIndex - 1));
    };

    const handleNextClick = () => {
        setCurrentQuoteIndex((prevIndex) => (prevIndex === quotes.length - 1 ? 0 : prevIndex + 1));
    };

    const currentQuote = quotes[currentQuoteIndex];

    return (
        <section className="testimonials">
            <div className="testimonials-left">
                <h2>What our clients say about us</h2>
            </div>
            <div className="testimonials-right">
                <blockquote className="testimonials-quote">
                    {currentQuote.quote}
                </blockquote>
                <div className="testimonials-author">
                    <img src={currentQuote.image} alt={currentQuote.author} className="author-image" />
                    <div className="author-info">
                        <p className="author-name">{currentQuote.author}</p>
                        <p className="author-title">{currentQuote.title}</p>
                    </div>
                </div>
                <div className="testimonials-controls">
                    <button className="control-button prev-button" onClick={handlePrevClick}>&lt;</button>
                    <button className="control-button next-button" onClick={handleNextClick}>&gt;</button>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;