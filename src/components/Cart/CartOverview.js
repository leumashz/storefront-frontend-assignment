import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';

const CartOverview = () => {
    const clearBoth = {
        clear: 'both',
        marginTop: '40px'
    };
    return (
        <React.Fragment>
            <div className="overview-separator">
                <hr style={clearBoth} />
            </div>
            <div className="cart-overview-page">
                <div className="cart-overview-title">
                    Cart Overview
                </div>
                <div className="cart-overview-content">
                    <StoreFrontend>
                        {
                            ({ getTotal }) => {
                                return (
                                    <React.Fragment>
                                        <div className="cart-overview-subtotal">
                                            total: $122.00
                                        </div>
                                        <div className="cart-overview-total">
                                            subtotal: $122.00
                                        </div>
                                    </React.Fragment>
                                )
                            }
                        }
                    </StoreFrontend>
                </div>
            </div>
        </React.Fragment>
    )
};

export default CartOverview;