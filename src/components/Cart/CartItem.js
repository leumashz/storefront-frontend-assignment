import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import ProductPrice from '../Product/ProductPrice';
import CartItemInfo from './CartItemInfo';

const CartItem = ({ item }) => (
    <div className="cart-item-container">
        <CartItemInfo item={item} />

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