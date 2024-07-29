import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductList from './components/Product';
import Cart from './components/Cart';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './styles/app.css';

const App = () => {
    const [cart, setCart] = useState([]);
    
    const handleAddToCart = (item) => {
        setCart([...cart, { ...item, amount: 1 }]);
    };

    const handleRemoveFromCart = (id) => {
        setCart(cart.filter(item => item.id !== id));
    };

    const handleChangeAmount = (item, delta) => {
        const updatedCart = cart.map(cartItem => {
            if (cartItem.id === item.id) {
                return { ...cartItem, amount: cartItem.amount + delta };
            }
            return cartItem;
        }).filter(cartItem => cartItem.amount > 0);
        setCart(updatedCart);
    };

    return (
        <Router>
            <Navbar cartCount={cart.length} />
            <div className="app-container">
                <Routes>
                    <Route path="/" element={<ProductList handleClick={handleAddToCart} />} />
                    <Route path="/product/:id" element={<ProductDetail handleClick={handleAddToCart} />} />
                    <Route path="/cart" element={<Cart cart={cart} setCart={setCart} handleChange={handleChangeAmount} handleRemove={handleRemoveFromCart} />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
            <Footer />
        </Router>
    );
};

export default App;
