import React, { useState } from "react";
import { searchIcon } from "../icons/search.js";
import { useNavigate } from "react-router-dom";

export const MyContext = React.createContext();

function SearchBar() {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState("");
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleSearchChange = (event) => {
    event.preventDefault();
    if (searchValue.trim() !== "") {
      const formattedValue =
        searchValue.charAt(0).toUpperCase() + searchValue.slice(1);
      setSearchValue(formattedValue);
      navigate(`/product/${formattedValue}`);
    }
    console.log("formatted", setSearchValue());
  };

  const handleSearchFocus = () => {
    setIsIconVisible(false);
  };

  const handleSearchBlur = () => {
    setIsIconVisible(searchValue === "");
  };

  return (
    <form onSubmit={handleSearchChange}>
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          type="text"
          placeholder="What groceries are you looking for?"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
        />
        {isIconVisible && <span className="search-icon">{searchIcon()}</span>}
      </div>
    </form>
  );
}

export default SearchBar;
