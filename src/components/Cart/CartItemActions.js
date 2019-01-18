import React from 'react';
import ProductPrice from '../Product/ProductPrice';

const CartItemActions = ({ removeAll, getQuantity, updateRootQuantity, item }) => (
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

export default CartItemActions;
