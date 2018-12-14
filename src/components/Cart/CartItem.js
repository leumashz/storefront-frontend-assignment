import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import ProductPrice from '../Product/ProductPrice';

const CartItem = ({ item }) => (
    <div className="cart-item-container">
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
        <div className="cart-item-actions">
            <StoreFrontend.Consumer>
                {({ getTotal, removeAll, getQuantity, updateRootQuantity }) => {
                    return (
                        <React.Fragment>
                            <div className="cart-item-quantity">
                                <input type="number" min="1" step="1" value={getQuantity(item.id)} onChange={(e) => updateRootQuantity(item.id, e.target.value)} />
                            </div>
                            <div className="cart-item-remove">
                                <span onClick={() => removeAll(item.id)}>&#10006;</span>
                            </div>
                            <div className="cart-item-price">
                                <ProductPrice price={item.price} />
                            </div>
                        </React.Fragment>
                    )
                }
                }
            </StoreFrontend.Consumer>
        </div>
    </div>
);

export default CartItem;