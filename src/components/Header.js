import React from 'react';
import './Header.css';

const Header = () => (
  <React.Fragment>
    <div>
      <div className="store-name">Hero</div>
      <div className="store-menu-section">
        <ul className="menu-hero-header">
          <li>HOME</li>
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
