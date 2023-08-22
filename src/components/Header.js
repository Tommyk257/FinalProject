import logo from "../images/Logo.jpg";
import Basket from "../components/Basket";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import SlidingPane from "react-sliding-pane";
import "react-sliding-pane/dist/react-sliding-pane.css";

function Header({basket}) {
  const [isPaneOpen, setIsPaneOpen] = useState(false);

  const handlePaneOpen = () => {
    setIsPaneOpen(true);
  };

  const handlePaneClose = () => {
    setIsPaneOpen(false);
  };

  return (
    <>
      <div className="header">
        <div className="head-nav-bar">
          <Link to="/">
            <img src={logo} alt="logo" height={150} width={150} />
          </Link>
          <form>
            <input className="search-bar"></input>
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
          <p>help</p>
          <p>my dog needs help</p>
          <p>please anyone</p>
          <p>fuck it ill eat it</p>
        </div>
      </div>
    </>
  );
}

export default Header;
