import React from 'react';
import CartItem from './CartItem';

const CartList = ({ items }) => {
    const itemList = items.map((item) => <CartItem item={item} key={item.id} />);

    return itemList;
}

export default CartList;