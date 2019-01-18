import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import CartItemInfo from './CartItemInfo';
import CartItemActions from './CartItemActions'

const CartItem = ({ item }) => (
    <div className="cart-item-container">
        <CartItemInfo item={item} />

        <div className="cart-item-actions">
            <StoreFrontend.Consumer>
                {({ getTotal, removeAll, getQuantity, updateRootQuantity }) => {
                    return (
                        <React.Fragment>
                            <CartItemActions {...{ getTotal, removeAll, getQuantity, updateRootQuantity, item }} />
                        </React.Fragment>
                    )
                }
                }
            </StoreFrontend.Consumer>
        </div>
    </div>
);

export default CartItem;