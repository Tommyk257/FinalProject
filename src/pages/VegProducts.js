import React, { useEffect, useState } from "react";

function Products({ addProductToBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/Fruits")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  const handleClick = () => {
    console.log(products);
  };

  return (
    <>
      <h1>1Veg Products</h1>
      <button onClick={handleClick}>Log products</button>
      <div className="products">
        {products.map((product) => (
          <ul>
            <div className="grid-element">
              <img src={product.product_image} alt={product.name} />
              <li className="product-name" key={product.id}>
                {product.product_name}
              </li>
              <li className="product-price" key={product.id}>
                {product.product_price}
              </li>
              <li className="product-description" key={product.id}>
                {product.product_description}
              </li>
              <div className="product-buttons">
                <button
                  key={product.id}
                  onClick={() => addProductToBasket(product)}
                ></button>
              </div>
            </div>
          </ul>
        ))}
      </div>
    </>
  );
}

export default Products;
