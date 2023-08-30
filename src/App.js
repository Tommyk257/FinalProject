import "./App.css";
import Header from "./components/Header";
import Mainsec from "./components/Mainsec";
import Products from "./pages/Products"
import VegProducts from "./pages/VegProducts"
import MeatProducts from "./pages/MeatsProducts"
import DairyProducts from "./pages/DairyProducts"
import { Route, Routes } from "react-router-dom";
import React, { useState } from 'react';


function App(props) {
  const [basket, setBasket] = useState([]);

  const addProductToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div className="App">
      <Header basket={basket} />
        <Routes>
        <Route path="/" element={<Mainsec />} />
        <Route path="/Products" element={<Products addProductToBasket={addProductToBasket} />} />
        <Route path="/Vegs" element={<VegProducts addProductToBasket={addProductToBasket} />} />
        <Route path="/Meats" element={<MeatProducts addProductToBasket={addProductToBasket} />} />
        <Route path="/Dairies" element={<DairyProducts addProductToBasket={addProductToBasket} />} />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
