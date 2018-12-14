import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';

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
                {({ getTotal, removeAll }) => {
                    return (
                        <React.Fragment>
                            <div className="cart-item-quantity">
                                12
                            </div>
                            <div className="cart-item-remove">
                                <span onClick={() => removeAll(item.id)}>X</span>
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