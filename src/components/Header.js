import React from 'react';
import './Header.css';
import logo from '../logo.png';
import { Link } from 'react-router-dom';

const Header = () => (
  <React.Fragment>
    <div>
      <div className="store-name"><img src={logo} alt="hero-logo"></img></div>
      <div className="store-menu-section">
        <ul className="menu-hero-header">
          <li>
            <Link to="/">
              HOME
            </Link>
          </li>
          <li>SHOP</li>
          <li>JOURNAL</li>
          <li>MORE</li>
          <li>MY CART</li>
        </ul>
      </div>
    </div>
  </React.Fragment>
);

export default Header;
