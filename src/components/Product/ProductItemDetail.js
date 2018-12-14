import React from 'react';
import StoreFrontend from '../../StoreFrontend.context';
import './Product.css';
// import { FormattedNumber } from 'react-intl';

class ProductItemDetail extends React.Component {

    render () {
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
                                        {
                                            new Intl.NumberFormat('en-US', {
                                                style: 'currency',
                                                currency: 'USD'
                                            }).format(item.price)
                                        }
                                    </div>
                                    <div className="product-detail-description">
                                        {item.description}
                                    </div>

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