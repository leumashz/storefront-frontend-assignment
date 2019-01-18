import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import CartItemInfo from './CartItemInfo';
import CartItemActions from './CartItemActions'

const CartItem = ({ item }) => (
    <div className="cart-item-container">
        <CartItemInfo item={item} />
        <div className="cart-item-actions">
            <StoreFrontend.Consumer>
                {
                    ({ removeAll, getQuantity, updateRootQuantity }) => {
                        return (
                            <React.Fragment>
                                <CartItemActions {...{ removeAll, getQuantity, updateRootQuantity, item }} />
                            </React.Fragment>
                        )
                    }
                }
            </StoreFrontend.Consumer>
        </div>
    </div>
);

export default CartItem;