import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Products({ addProductToBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {products.map((product) => (
          <ul>
            <div className="grid-element">
              <Link to={`/product/${product.product_name}`}>
                <img src={product.product_image} alt={product.name} />
              </Link>
              <li className="product-name" key={product.id}>
                {product.product_name}
              </li>
              <li className="product-price" key={product.id}>
                {product.product_price}
              </li>
              <li className="product-description" key={product.id}>
                {product.product_description}
              </li>
                <button className="product-buttons"
                  key={product.id}
                  onClick={() => addProductToBasket(product)}
                ></button>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Products;
