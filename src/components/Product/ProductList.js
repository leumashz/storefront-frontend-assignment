import React from 'react';
import ProductItem from './ProductItem';
import './Product.css';

const ProductList = ({ items }) => {
    const list = items.map((product, index) => (
        <ProductItem item={product} key={index} items={items} />
    ));

    return (
        <div className="product-list-container">
            {list}
        </div>
    );
};

export default ProductList;
