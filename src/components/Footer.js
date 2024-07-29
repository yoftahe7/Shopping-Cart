import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <Link to="/about">About Us</Link>
                    <Link to="/contact">Contact Us</Link>
                </div>
                <div className="footer-info">
                    <p>&copy; 2024 Yofti-Store. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
