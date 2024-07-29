import React, { useState, useEffect, useCallback } from 'react';
import '../styles/cart.css';

const Cart = ({ cart, setCart, handleChange }) => {
    const [price, setPrice] = useState(0);

    const handlePrice = useCallback(() => {
        const total = cart.reduce((acc, item) => acc + item.amount * item.price, 0);
        setPrice(total);
    }, [cart]);

    useEffect(() => {
        handlePrice();
    }, [handlePrice]);

    const handleRemove = (id) => {
        if (window.confirm("Are you sure you want to remove this item?")) {
            const newCart = cart.filter(item => item.id !== id);
            setCart(newCart);
        }
    };

    if (cart.length === 0) {
        return <div className="cart-empty">Your cart is empty</div>;
    }

    return (
        <article>
            {cart.map((item) => (
                <div className="cart_box" key={item.id}>
                    <div className="cart_img">
                        <img src={item.img} alt={item.title} />
                        <p>{item.title}</p>
                    </div>
                    <div className="cart_quantity">
                        <button onClick={() => handleChange(item, +1)}> + </button>
                        <span>{item.amount}</span>
                        <button onClick={() => handleChange(item, -1)}> - </button>
                    </div>
                    <div className="cart_price">
                        <span>{item.price}</span>
                        <button onClick={() => handleRemove(item.id)}>Remove</button>
                    </div>
                </div>
            ))}
            <div className='total'>
                <span>Total Price of your Cart</span>
                <span>Rs - {price}</span>
            </div>
        </article>
    );
};

export default Cart;
