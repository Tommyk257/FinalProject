import "./App.css";
import Header from "./components/Header";
import Mainsec from "./components/Mainsec";
// import Sidebar from "./components/sidePannel/Sidebar";
import Products from "./pages/Products"
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
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
