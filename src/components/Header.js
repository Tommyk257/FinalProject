import React, { useState } from "react";
import { LogoSvg } from "../images/LogoSvg";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import { searchIcon } from "../icons/search.js";
import Basket from "../components/Basket";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function Header({ basket }) {
  const [isPaneOpen, setIsPaneOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [isIconVisible, setIsIconVisible] = useState(true);

  // bassket pannel

  const handlePaneOpen = () => {
    setIsPaneOpen(true);
  };

  const handlePaneClose = () => {
    setIsPaneOpen(false);
  };

  // search-bar

  const handleSearchChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleSearchFocus = () => {
    setIsIconVisible(false);
  };

  const handleSearchBlur = () => {
    setIsIconVisible(searchValue === "");
    
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
          <Link to="/">
            <LogoSvg />
          </Link>
          <form>
            <div className="search-bar-wrapper">
            
            <input
              className="search-bar"
              value={searchValue}
              onChange={handleSearchChange}
              onFocus={handleSearchFocus}
              onBlur={handleSearchBlur}   
              placeholder="What groceries are you looking for?"
            ></input>
             {isIconVisible && <span className="search-icon">{searchIcon()}</span>}
            </div>
          </form>

          <div className="head-nav-bar-button">
            <button>My jumbo</button>
            <button onClick={handlePaneOpen} className="basket-button">
              basket
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
          <Link to="/Products">
            <p>products</p>
          </Link>
          <p>Offers/Promotions</p>
          <p>Recipes</p>
        </div>
      </div>
    </>
  );
}

export default Header;
