import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import './Product.css';
import CartActions from '../Cart/CartActions';
import ProductPrice from './ProductPrice';

class ProductItemDetail extends React.Component {
    render() {
        return (
            <StoreFrontend.Consumer>
                {
                    ({ getElementById }) => {
                        const paramId = this.props.match.params.id;
                        const item = getElementById(paramId);

                        return (
                            <div className="product-detail-container">
                                <hr />
                                <div className="url-breadcrumb">
                                    <span className="base-url-detail"> HOME / PLATES / </span> <span className="current-detail">{item.title}</span>
                                </div>
                                <div className="product-detail-image">
                                    <img src={item.image} alt="detail-plate-img" />
                                </div>
                                <div className="product-detail-text">
                                    <div className="product-detail-title">{item.title}</div>
                                    <div className="product-detail-price">
                                        <ProductPrice price={item.price} />
                                    </div>

                                    <div className="product-detail-description">
                                        {item.description}
                                    </div>

                                    <CartActions itemId={item.id} />
                                </div>
                            </div>
                        );
                    }
                }
            </StoreFrontend.Consumer>
        );
    }
}

export default ProductItemDetail;