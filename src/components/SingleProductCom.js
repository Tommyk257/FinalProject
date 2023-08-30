import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function SingleProductCom({ addProductToBasket }) {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productName}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
      });
  }, [productName]);

  if (!product) {
    return <div>Sorry product unavailable...</div>;
  }

  return (
    <div className="single_product_contianer">
      <h1>{product.data.product_name}</h1>
      <p>Price: {product.data.product_price}</p>
      <p>Description: {product.data.product_description}</p>
      <img src={product.data.product_image} alt={product.product_name} />
      <button className="product-buttons"
        key={product.data.id}
        onClick={() => addProductToBasket(product.data)}
      ></button>
    </div>
  );
}

export default SingleProductCom;
