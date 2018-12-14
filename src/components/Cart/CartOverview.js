import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import { Link } from 'react-router-dom';
import ProductPrice from '../Product/ProductPrice';

const CartOverview = () => {
    return (
        <React.Fragment>
            <div className="cart-overview-page">
                <div className="cart-overview-content">
                    <StoreFrontend.Consumer>
                        {
                            ({ getTotal, getCartLength }) => {
                                const total = getTotal();

                                const shopAction = (
                                    <React.Fragment>
                                        <div className="cart-overview-title">
                                            CART OVERVIEW
                                        </div>
                                        <div className="cart-overview-subtotal">
                                            subtotal: <ProductPrice price={total} />
                                        </div>
                                        <div className="cart-overview-total">
                                            total: <span><ProductPrice price={total} /> CAD</span>
                                        </div>
                                        <div className="cart-overview-checkout-btn">
                                            <button>Checkout (<ProductPrice price={total} />)</button>
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