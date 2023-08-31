import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { addIcon } from "../icons/add.js";

function Products({ addProductToBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/dairys")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <div className="products-container">
        <Sidebar />
        <div className="grid-container">
          <div className="pages-container">
            <h1>Dairy Products</h1>

          </div>
          <div className="products-grid">
            {products.map((product) => (
              <ul>
                <div className="grid-element">
                  <span className="product-buttons">
                    <button
                      key={product.id}
                      onClick={() => addProductToBasket(product)}
                    >
                      {addIcon()}
                    </button>
                  </span>
                  <Link to={`/product/${product.product_name}`}>
                    <img
                      className="product-image"
                      src={product.product_image}
                      alt={product.name}
                    />
                  </Link>
                  <li className="product-info" key={product.id}>
                    <span className="product-name">{product.product_name}</span>
                    <span className="product-price">
                      £{product.product_price}
                    </span>
                  </li>
                  <li className="product-info-2" key={product.id}>
                    <span className="product-description" key={product.id}>
                      {product.product_description}
                    </span>
                  </li>
                </div>
              </ul>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
