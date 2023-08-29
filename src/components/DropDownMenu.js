import React from 'react';
import { Link } from 'react-router-dom';

function PromotionsMenu({ menuItems }) {
  const productsStyle = {
    marginLeft: '125px', // Apply your desired margin value
  };
  return (
    <div className="dropdown">
      <Link to="/products">
      <p className="page-nav" style={productsStyle}>Products</p>
      </Link>
      <div className="dropdown-content" style={productsStyle}>
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default PromotionsMenu;