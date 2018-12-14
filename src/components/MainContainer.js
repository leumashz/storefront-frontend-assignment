import React from 'react';
import ProductList from './Product/ProductList';
import StoreFrontend from '../StoreFrontend.context';

class MainContainer extends React.Component {

  render () {
    return (
      <StoreFrontend.Consumer>
        {
          ({ products }) => {
            return <ProductList items={products} />;
          }
        }
      </StoreFrontend.Consumer>
    );

  }
}

export default MainContainer;
