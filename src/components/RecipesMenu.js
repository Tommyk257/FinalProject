import React from 'react';
import { Link } from 'react-router-dom';

function RecipesMenu({ menuItems }) {
  return (
    <div className="dropdown">
      <p className="page-nav">Recipes</p>
      <div className="dropdown-content">
        {menuItems.map((item, index) => (
          <Link key={index} to={item.link}>
            <p>{item.label}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default RecipesMenu;