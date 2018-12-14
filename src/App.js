import React, { Component } from 'react';
import CategoryView from './components/CategoryView';
import ProductItemDetail from './components/Product/ProductItemDetail';
import CartPage from './components/Cart/CartPage';
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
      cart: {}
    }
  }

  addItemToCart = (itemId, quantity) => {
    const cart = this.state.cart;
    cart[itemId] = cart[itemId] ? parseInt(cart[itemId]) + parseInt(quantity) : parseInt(quantity);

    this.setState(
      {
        cart: cart
      }
    )

    // console.log(this.state.cart);
  }

  getElementById = (itemId) => {
    return this.state.products.find((element) => String(element.id) === String(itemId));
  }

  setProductList = (items) => {
    this.setState({
      products: items
    })
  }

  clearCart = () => {
    this.setState({
      cart: []
    })
  }

  getCartLength = () => (
    this.state.cart.length
  );

  render () {
    return (
      <StoreFrontendContext.Provider value={{
        cart: [],
        products: this.state.products,
        addItemToCart: this.addItemToCart,
        getElementById: this.getElementById,
        setProductList: this.setProductList,
        clearCart: this.clearCart,
        getCartLength: this.getCartLength
      }}>
        <div className="main-page-container">
          <Header />
          <Switch>
            <Route exact path="/" component={CategoryView} key="category-view" />
            <Route path="/plates/:id" component={ProductItemDetail} key="product-detail" />
            <Route path="/cart" component={CartPage} />
          </Switch>
        </div>
      </StoreFrontendContext.Provider>
    );
  }
}

export default App;
