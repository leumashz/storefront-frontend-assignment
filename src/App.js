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
      cart: {
        121: 3,
        122: 1
      },
      cartItems: []
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

  getCartLength = () => {
    const values = Object.values(this.state.cart);

    const totalElements = values.reduce((prev, curr) => {
      return prev + curr;
    }, 0);

    return totalElements;
  }

  getItemsInCart = () => {
    const ids = Object.keys(this.state.cart);
    const currentItems = ids.map((id) => this.getElementById(id));

    return currentItems;
  }

  getTotal = () => {

  }

  removeAll = (itemId) => {
    let filteredCart = this.state.cart;

    delete filteredCart[itemId];

    this.setState({
      cart: filteredCart
    })
  }

  getQuantity = (itemId) => {
    const quantity = this.state.cart[itemId];

    return quantity;
  }

  updateRootQuantity = (itemId, quantity) => {
    const cart = this.state.cart;
    cart[itemId] = parseInt(quantity);

    this.setState(
      {
        cart: cart
      }
    )
  } 

  render () {
    return (
      <StoreFrontendContext.Provider value={{
        cart: this.state.cart,
        products: this.state.products,
        addItemToCart: this.addItemToCart,
        getElementById: this.getElementById,
        setProductList: this.setProductList,
        clearCart: this.clearCart,
        getCartLength: this.getCartLength,
        getItemsInCart: this.getItemsInCart,
        getTotal: this.getTotal,
        removeAll: this.removeAll,
        getQuantity: this.getQuantity,
        updateRootQuantity: this.updateRootQuantity
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
