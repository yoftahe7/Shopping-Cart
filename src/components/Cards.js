import React from 'react';
import '../styles/Product.css';

const Cards = ({ item, handleClick }) => {
    const { title, author, price, img } = item;

    return (
        <div className="product-card">
            <img src={img} alt={title} />
            <h2>{title}</h2>
            <p>{author}</p>
            <p>Price: {price} Rs</p>
            <button onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
    );
};

export default Cards;
