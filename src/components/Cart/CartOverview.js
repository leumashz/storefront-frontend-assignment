import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import { Link } from 'react-router-dom';

const CartOverview = () => {
    const clearBoth = {
        clear: 'both',
        marginTop: '40px'
    };
    return (
        <React.Fragment>
            <div className="cart-overview-page">
                <div className="cart-overview-content">
                    <StoreFrontend.Consumer>
                        {
                            ({ getTotal, getCartLength }) => {
                                const shopAction = (
                                    <React.Fragment>
                                        <div className="cart-overview-title">
                                            CART OVERVIEW
                                        </div>
                                        <div className="cart-overview-subtotal">
                                            total: $122.00
                                        </div>
                                        <div className="cart-overview-total">
                                            subtotal: <span>$122.00 CAD</span>
                                        </div>
                                        <div className="cart-overview-checkout-btn">
                                            <button>Checkout ($122.00)</button>
                                        </div>
                                        <div className="cart-overview-continue-shopping">
                                            <Link to="/">
                                                Continue shopping
                                        </Link>
                                        </div>                                        
                                    </React.Fragment>
                                );

                                const emptyCart = (
                                    <React.Fragment>
                                        <div className="empty-cart-action">Empty Cart</div>                                        
                                    </React.Fragment>
                                );

                                const currentShopStatus = getCartLength() > 0 ? shopAction : emptyCart;

                                return currentShopStatus;

                            }
                        }
                    </StoreFrontend.Consumer>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CartOverview;