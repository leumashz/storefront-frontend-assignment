import React from 'react';
import { Link } from 'react-router-dom';

import './Product.css';


class ProductItem extends React.Component {
    constructor() {
        super();
        this.state = { details: false };
    }

    hideElements = false;

    showDetails = () => {
        this.setState({ details: true });
    }

    hideDetails = () => {
        this.setState({ details: false });
    }

    onClick = () => {

    }

    componentDidUpdate () {
        // console.log('component update');
        // console.log(this.props);
    }

    render () {
        const details = this.state.details;

        let itemActions = null;

        if (details) {
            itemActions =
                <div className="action-btns">
                    <Link to={`/plates/${this.props.item.id}`}><button>View Details</button></Link>
                    <br />
                    <button>Add to Cart</button>
                </div >;
        }

        const item = <div className="product-item-card" onMouseEnter={this.showDetails}
            onMouseLeave={this.hideDetails}>
            <div className="product-item-element">
                <img src={this.props.item.image} alt="plate-img" />
                <div>
                    <div className="product-category">
                        {this.props.item.brand}
                    </div>
                    <div className="product-label">
                        {this.props.item.title}
                    </div>
                    <div className="product-price">
                        {
                            new Intl.NumberFormat('en-US', {
                                style: 'currency',
                                currency: 'USD'
                            }).format(this.props.item.price)
                        }
                    </div>
                </div>
            </div>
            {itemActions}
        </div>;

        return item;
    }
}


export default ProductItem;