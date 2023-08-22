import React, { useEffect, useState,  } from "react";


function Products({ addProductToBasket }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/nike-products")
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
                <img src={product.image} alt={product.name} />
                <li className="product-name" key={product.id}>
                  {product.product}
                </li>
                <li className="product-price" key={product.id}>
                  {product.price}
                </li>
                <li className="product-description" key={product.id}>
                  {product.description}
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
