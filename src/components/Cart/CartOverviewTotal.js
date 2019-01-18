import React from 'react';
import { Link, withRouter} from 'react-router-dom';
import ProductPrice from '../Product/ProductPrice';

const CartOverviewTotal = ({ total }) => (
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

export default withRouter(CartOverviewTotal);