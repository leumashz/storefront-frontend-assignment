import React, { Component } from 'react';
import CategoryView from './components/CategoryView';
import ProductItemDetail from './components/Product/ProductItemDetail';
import Header from './components/Header';
import { Route, Switch } from "react-router-dom";
import './App.css';
import StoreFrontendContext from './StoreFrontend.context';
import products from './products2.json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: products,
      cart: []
    }
  }

  addItemToCart = (item) => {
    this.setState({
      products: [this.state.products, ...item]
    })
  }

  getElementById = (itemId) => {
    console.log(this.state.products, 'elements');

    return this.state.products.find((element) => String(element.id) === String(itemId));
  }

  setProductList = (items) => {
    this.setState({
      products: items
    })
  }

  render () {
    return (
      <StoreFrontendContext.Provider value={{
        cart: [],
        products: this.state.products,
        addItemToCart: this.addItemToCart,
        getElementById: this.getElementById,
        setProductList: this.setProductList
      }}>
        <div className="main-page-container">
          <Header />
          <Switch>
            <Route exact path="/" component={CategoryView} key="category-view" />
            <Route path="/plates/:id" component={ProductItemDetail} key="product-detail" />
            {/*<Route path="/contact" component={Contact} /> */}
          </Switch>
        </div>
      </StoreFrontendContext.Provider>
    );
  }
}

export default App;
