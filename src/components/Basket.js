import React from "react";


function Basket({ basket }) {
 


  return (
    <div className="basket-box-grid">
      <h1>basket</h1>
      <section className="product-list">
        <ul>
          {basket.map((item) => (
            <li key={item.id} className="basket-item">
              <img
                className="basket-image"
                src={item.product_image}
                alt={item.product_name}
              />
              <div className="basket-details">
                <div className="basket-name">{item.product_name}</div>
              </div>
              <div className="basket-price">£{item.product_price}</div>
              <button></button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

export default Basket;
