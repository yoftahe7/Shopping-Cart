import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

const Navbar = ({ cartCount }) => {
    return (
        <nav className="navbar">
            <div className="logo">
                <Link to="/">Yofti-Store</Link>
            </div>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </div>
            <div className="nav-actions">
                <div className="search-bar">
                    <input type="text" placeholder="Search products..." />
                    <button type="submit">Search</button>
                </div>
                <div className="cart">
                    <Link to="/cart">
                        <i className="fas fa-shopping-cart"></i>
                        <span className="cart-count">{cartCount}</span>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
