import React from 'react';
import './Header.css';
import logo from '../logo.png';
import { Link, withRouter, Router } from 'react-router-dom';
import StoreFrontend from '../StoreFrontend.context';

const Header = () => (
  <React.Fragment>
    <div>
      <div className="store-name">
        <Link to="/">
          <img src={logo} alt="hero-logo"></img>
        </Link>
      </div>
      <div className="store-menu-section">
        <ul className="menu-hero-header">
          <li>
            <Router>
              <Link to="/">
                HOME
            </Link>
            </Router>
          </li>
          <li>SHOP</li>
          <li>JOURNAL</li>
          <li>MORE</li>
          <li>
            <StoreFrontend.Consumer>
              {
                ({ getCartLength }) =>
                  <Link to="/cart">
                    <span>MY CART ({getCartLength()})</span>
                  </Link>
              }
            </StoreFrontend.Consumer>
          </li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);

export default withRouter(Header);
