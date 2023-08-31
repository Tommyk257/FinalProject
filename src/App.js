import "./App.css";
import Header from "./components/Header";
// import ProductCategory from "./components/ProductCategory";
import Mainsec from "./components/Mainsec";
import SingleProductCom from "./components/SingleProductCom";
import Products from "./pages/Products";
import VegProducts from "./pages/VegProducts";
import MeatProducts from "./pages/MeatsProducts";
import DairyProducts from "./pages/DairyProducts";
import { Route, Routes } from "react-router-dom";
import React, { useState } from "react";
import { Helmet } from "react-helmet";

function App() {
  const [basket, setBasket] = useState([]);

  const addProductToBasket = (product) => {
    setBasket([...basket, product]);
  };

  return (
    <div className="App">
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <Header basket={basket} />
      <Routes>
        <Route path="/" element={<Mainsec />} />
        <Route
          path="/Products"
          element={<Products addProductToBasket={addProductToBasket} />}
        />
        <Route
          path="/product/:productName"
          element={<SingleProductCom addProductToBasket={addProductToBasket} />}
        />
        <Route
          path="/fruits"
          element={<VegProducts addProductToBasket={addProductToBasket} />}
        />
        <Route
          path="/meats"
          element={<MeatProducts addProductToBasket={addProductToBasket} />}
        />
        <Route
          path="/dairy"
          element={<DairyProducts addProductToBasket={addProductToBasket} />}
        />
      </Routes>
      <footer></footer>
    </div>
  );
}

export default App;
