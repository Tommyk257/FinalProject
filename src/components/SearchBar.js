import React, { useState } from "react";
import { searchIcon } from "../icons/search.js";

function SearchBar({ onSubmit, onSearchChange }) {
  const [searchValue, setSearchValue] = useState("");
  const [isIconVisible, setIsIconVisible] = useState(true);

  const handleSearchChange = (event) => {
    const newValue = event.target.value;
    setSearchValue(newValue);
    onSearchChange(newValue);
  };

  const handleSearchFocus = () => {
    setIsIconVisible(false);
  };

  const handleSearchBlur = () => {
    setIsIconVisible(searchValue === "");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          value={searchValue}
          onChange={handleSearchChange}
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}   
          placeholder="What groceries are you looking for?"
        />
        {isIconVisible && <span className="search-icon">{searchIcon()}</span>}
      </div>
    </form>
  );
}

export default SearchBar;
