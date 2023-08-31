import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { addIcon } from "../icons/add.js";

function SingleProductCom({ addProductToBasket }) {
  const { productName } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:4000/products/${productName}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Product not found");
        }
        return response.json();
      })
      .then((data) => {
        setProduct(data);
        console.log("data", data);
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        setProduct(null); // Set product to null in case of error
      });
  }, [productName]);

  if (!product) {
    return (
      <div className="noProduct-error">
        <p>Sorry, the product is unavailable...</p>
        <button></button>
      </div>
    );
  }

  return (
    <div>
      <div className="single_product_contianer">
        <img src={product.data.product_image} alt={product.product_name} />
        <div className="single_product_info_grid">
          <div className="single_product_info">
            <h1>{product.data.product_name}</h1>
            <p>{product.data.product_price}</p>
            <p>{product.data.product_description}</p>
            <div className="single_product_button">
              <button
                key={product.id}
                onClick={() => addProductToBasket(product)}
              >
                <p>Add To Cart</p> {addIcon()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProductCom;
