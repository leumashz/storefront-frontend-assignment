import React from 'react';

const CartItemInfo = ({item}) => (    
    <React.Fragment>        
        <div className="cart-item-img">
            <img src={item.image} alt="item-plate-element" />
        </div>
        <div className="cart-item-info">
            <div className="cart-item-category">
                {item.brand}
            </div>
            <div className="cart-item-title">
                {item.title}
            </div>
        </div>
    </React.Fragment>
);

export default CartItemInfo;