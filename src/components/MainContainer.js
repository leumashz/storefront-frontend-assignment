import React from 'react';
import ProductList from './Product/ProductList';
import { products } from '../products.json';

class MainContainer extends React.Component {
  componentDidMount () {
    // fetch('../products.json')
    //   .then(response => console.log(response))
    console.log(products);
  }

  render () {
    return <ProductList items={products} />;
  }
}

export default MainContainer;
