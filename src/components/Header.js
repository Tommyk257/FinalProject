import React, { useState } from "react";
import "react-sliding-pane/dist/react-sliding-pane.css";
import { Helmet } from "react-helmet";
import Basket from "../components/Basket";
import SlidingPane from "react-sliding-pane";
import { basketIcon } from "../icons/basket.js";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import DropdownMenu from './DropDownMenu.js';
import PromotionsMenu from './PromotionsMenu.js';
import RecipesMenu from './RecipesMenu.js';

function Header({ basket }) {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue, "search");
  // droppDownMenu

  const productsMenuItems = [
    { label: 'Fruit/Veg', link: '/Vegs' },
    { label: 'Meats',     link: '/Meats' },
    { label: 'Dairy',     link: '/Dairies' },
  ];

  const promotionMenu = [
    { label: 'Offers', link: '/category1' },
    { label: 'BBQ Special', link: '/category2' },
    { label: 'Back to school', link: '/category3' },
  ];

  const recipesMenu = [
    { label: 'Category 1', link: '/category1' },
    { label: 'Category 2', link: '/category2' },
    { label: 'Category 3', link: '/category3' },
  ];


  // bassket pannel

  const handlePaneOpen = () => {
    setIsPaneOpen(true);
  };

  const handlePaneClose = () => {
    setIsPaneOpen(false);
  };

  // search-bar

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Input value:", searchValue);
  };

  const handleSearchChange = (value) => {
    setSearchValue(value);
  };

  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@900&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <div className="header">
        <div className="head-nav-bar">
          <Logo />
          <SearchBar
            onSubmit={handleSubmit}
            onSearchChange={handleSearchChange}
          />

          <div className="head-nav-bar-button">
            <button className="jumbo-button">My jumbo</button>
            <button onClick={handlePaneOpen} className="basket-button">
              {basketIcon()}
            </button>
          </div>

          <SlidingPane
            className="my-sliding-pane"
            isOpen={isPaneOpen}
            title="My Sliding Pane"
            onRequestClose={handlePaneClose}
            width="700px"
          >
            <Basket basket={basket} />
          </SlidingPane>
        </div>

        <div className="page-nav">
          <DropdownMenu menuItems={productsMenuItems} />
          <PromotionsMenu menuItems={promotionMenu} />
          <RecipesMenu menuItems={recipesMenu} />
        </div>
      </div>
    </>
  );
}

export default Header;
