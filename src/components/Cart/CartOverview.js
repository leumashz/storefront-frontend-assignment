import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import CartOverviewTotal from './CartOverviewTotal';
import CartEmpty from './CartEmpty';

const CartOverview = () => (
    <React.Fragment>
        <div className="cart-overview-page">
            <div className="cart-overview-content">
                <StoreFrontend.Consumer>
                    {
                        ({ getTotal, getCartLength }) => {
                            const total = getTotal();
                            const shopAction = <CartOverviewTotal total={total} />
                            const emptyCart = <CartEmpty />;
                            const currentShopStatus = getCartLength() > 0 ? shopAction : emptyCart;

                            return currentShopStatus;
                        }
                    }
                </StoreFrontend.Consumer>
            </div>
        </div>
    </React.Fragment>
);

export default CartOverview;