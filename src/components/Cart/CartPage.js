import React from 'react';
import './Cart.css';
import CartList from './CartList';
import StoreFrontend from '../../StoreFrontend.context';
import CartOverview from './CartOverview';

class CartPage extends React.Component {

    render () {

        return (
            <div className="cart-page-container">
                <div className="cart-page-title">
                    <span>Shopping Cart</span>
                </div>
                <div className="cart-page-list-container">
                    <StoreFrontend.Consumer>
                        {
                            ({ getItemsInCart }) => {
                                const itemsInCart = getItemsInCart();
                                return (
                                    <React.Fragment>
                                        <CartList items={itemsInCart} />
                                        <CartOverview />                                                                              
                                    </React.Fragment>
                                )
                            }
                        }
                    </StoreFrontend.Consumer>
                </div>
            </div>
        );
    }
}

export default CartPage;