import React from 'react';

function Basket({ basket }) {
 

    return (
        <div className="basket-box-grid">
        <h1>basket</h1>
        <section className="product-list">
        <ul>
          {basket.map((item) => (
            <li key={item.id}>
              <div>{item.product_name} {item.product_price}</div>
            </li>
          ))}
        </ul>
        </section>
      </div>
    );
  }
  
  export default Basket;
  