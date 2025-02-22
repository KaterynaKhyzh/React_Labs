import React, { useEffect, useRef } from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import HowWeWork from './components/HowWeWork';
import SendInquiry from './components/SendInquiry';
import Testimonials from './components/Testimonials';
import About from './components/About';
import Contact from './components/Contact';
import './App.css';

function App() {
    const sectionsRef = useRef([]);

    useEffect(() => {
        const handleScroll = () => {
            sectionsRef.current.forEach((section) => {
                if (section) {
                    const rect = section.getBoundingClientRect();
                    if (rect.top < window.innerHeight * 0.75) {
                        section.classList.add('active');
                    }
                }
            });
        };

        handleScroll(); 
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const addSectionRef = (el) => {
        if (el && !sectionsRef.current.includes(el)) {
            sectionsRef.current.push(el);
        }
    };

    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={
                    <>
                        <section ref={addSectionRef} className="animate-on-scroll"><Hero /></section>
                        <section ref={addSectionRef} className="animate-on-scroll"><HowWeWork /></section>
                        <section ref={addSectionRef} className="animate-on-scroll"><SendInquiry /></section>
                        <section ref={addSectionRef} className="animate-on-scroll"><Testimonials /></section>
                    </>
                } />
                <Route path="/about" element={<section ref={addSectionRef} className="animate-on-scroll"><About /></section>} />
                <Route path="/contact" element={<section ref={addSectionRef} className="animate-on-scroll"><Contact /></section>} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;