import React from 'react';
import './Product.css';

const ProductItem = ({ item }) => {
    return (
        <div className="product-item-card">
            <div className="product-item-element">
                <img src={item.image} alt="plate-img" />
                <div>
                    <div className="product-category">
                        {item.category}
                    </div>
                    <span className="product-label">
                        {item.name}
                    </span>
                    <div className="product-price">
                        {item.price}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductItem;