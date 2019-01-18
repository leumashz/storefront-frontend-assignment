import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import StoreFronted from '../../StoreFrontend.context';

const ProductPopUpActions = ({ id }) => (
    <div className="action-btns">        
            <Link to={`/plates/${id}`}><button>View Details</button></Link>        
        <br />
        <StoreFronted.Consumer>
            {
                ({ addItemToCart }) => {
                    return <button onClick={() => addItemToCart(id, 1)}> Add to Cart</button>
                }

            }
        </StoreFronted.Consumer>
    </div>
);

export default withRouter(ProductPopUpActions);