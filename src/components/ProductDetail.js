import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import '../styles/ProductDetail.css'; // Ensure the file name matches exactly

const ProductDetail = ({ handleClick }) => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`/api/products/${id}`);
                if (!response.ok) {
                    throw new Error('Product not found');
                }
                const data = await response.json();
                setProduct(data);
                setLoading(false);
            } catch (err) {
                setError(err);
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>Product not found</div>;

    return (
        <div className="product-detail">
            <div className="product-image">
                <img src={product.img || 'https://via.placeholder.com/400'} alt={product.title} />
            </div>
            <div className="product-info">
                <p>{product.description}</p>
                <p className="price">Price: {product.price} Rs</p>
                <button onClick={() => handleClick(product)}>Add to Cart</button>
            </div>
        </div>
    );
};

export default ProductDetail;
