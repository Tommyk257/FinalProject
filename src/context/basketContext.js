import React, { createContext, useContext, useState } from "react";

const BasketContext = createContext();

export function BasketProvider({ children }) {
  const [basket, setBasket] = useState([]);

  const addProductToBasket = (product) => {
    setBasket([...basket, product]);
  };

  const removeProductFromBasket = (productId) => {
    const updatedBasket = basket.filter(item => item.id !== productId);
    setBasket(updatedBasket);
  };

  return (
    <BasketContext.Provider
      value={{ basket, addProductToBasket, removeProductFromBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
}

export function useBasket() {
  return useContext(BasketContext);
}