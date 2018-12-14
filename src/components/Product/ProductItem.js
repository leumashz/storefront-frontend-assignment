import React from 'react';
import ProductPrice from './ProductPrice';
import ProductPopUpActions from './ProductPopUpActions';
import './Product.css';

class ProductItem extends React.Component {
    constructor() {
        super();
        this.state = { details: false };
    }    

    showDetails = () => {
        this.setState({ details: true });
    }

    hideDetails = () => {
        this.setState({ details: false });
    }

    render() {
        const details = this.state.details;

        let itemActions = null;

        if (details) {
            itemActions = <ProductPopUpActions id={this.props.item.id} />
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
                        <ProductPrice price={this.props.item.price} />
                    </div>
                </div>
            </div>
            {itemActions}
        </div>;

        return item;
    }
}


export default ProductItem;