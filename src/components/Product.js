import React, { useState } from 'react';
import '../styles/Product.css';
import Cards from './Cards';

const Product = ({ handleClick }) => {
    const [products] = useState([
        {
            id: 1,
            title: "Laptop",
            price: 50000,
            img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8",
        },
        {
            id: 2,
            title: "Smartphone",
            price: 20000,
            img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9",
        },
        {
            id: 3,
            title: "Headphones",
            price: 3000,
           img:"https://www.bhphotovideo.com/cdn-cgi/image/fit=scale-down,width=500,quality=95/https://www.bhphotovideo.com/images/images500x500/beats_by_dr_dre_900_00183_01_studio_wireless_over_ear_headphone_1394714729_1037578.jpg",
        },
        {
            id: 4,
            title: "Smartwatch",
            price: 10000,
            img: "https://th.bing.com/th/id/OIP.6RjIleMR6JjDGl-yonyJzwAAAA?rs=1&pid=ImgDetMain",
        },
        {
            id: 5,
            title: "Tablet",
         
            price: 45000,
            img: "https://cdn11.bigcommerce.com/s-xt5en0q8kf/images/stencil/500x659/products/10479/24482/IPADP-105-CEL-512-SG-E-2__72019__58370__96595.1639083561.jpg?c=2",
        },
        {
            id: 6,
            title: "Monitor",
            price: 12000,
            img: "https://images-na.ssl-images-amazon.com/images/I/81nEXvq7PkL._SL1500_.jpg",
        },
        {
            id: 7,
            title: "Keyboard",
            price: 2000,
            img: "https://external-preview.redd.it/Y6ys38uuFAHuowO8f3sjjhyMDmS8TKhtN4V5G6qiKJQ.jpg?auto=webp&s=84ceba0a7b098c2b2838bc11dab9ad326e18de68",
        },
        {
            id: 8,
            title: "Mouse",
            price: 1500,
            img: "https://th.bing.com/th/id/OIP.t7qjTxf76SkRzkMEsQMW6gHaF3?rs=1&pid=ImgDetMain",
        },
        {
            id: 9,
            title: "Printer",
            price: 8000,
            img: "https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6280/6280710_sd.jpg",
        },
        {
            id: 10,
            title: "Camera",
            price: 30000,
            img: "https://www.bhphotovideo.com/images/images2500x2500/nikon_13302_d7100_dslr_camera_with_1005009.jpg",
        },
        {
            id: 11,
            title: "Speakers",
            price: 5000,
            img: "https://pngimg.com/uploads/audio_speakers/audio_speakers_PNG11152.png",
        },
        {
            id: 12,
            title: "Projector",
            price: 25000,
            img: "https://www.bhphotovideo.com/images/images2500x2500/Panasonic_PT_EX12KU_PT_EX12KU_LCD_Projector_871669.jpg",
        },
    ]);

    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const handleSortChange = (e) => {
        setSort(e.target.value);
    };

    const filteredProducts = products.filter((product) =>
        product.title.toLowerCase().includes(filter.toLowerCase())
    );

    const sortedProducts = filteredProducts.sort((a, b) => {
        if (sort === 'price-asc') {
            return a.price - b.price;
        } else if (sort === 'price-desc') {
            return b.price - a.price;
        }
        return 0;
    });

    return (
        <div className="product-container">
            <div className="filter-sort">
                <input
                    type="text"
                    placeholder="Filter by name"
                    value={filter}
                    onChange={handleFilterChange}
                />
                <select value={sort} onChange={handleSortChange}>
                    <option value="">Sort by</option>
                    <option value="price-asc">Price: Low to High</option>
                    <option value="price-desc">Price: High to Low</option>
                </select>
            </div>
            <div className="product-list">
                {sortedProducts.map((product) => (
                    <Cards key={product.id} item={product} handleClick={handleClick} />
                ))}
            </div>
        </div>
    );
};

export default Product;
