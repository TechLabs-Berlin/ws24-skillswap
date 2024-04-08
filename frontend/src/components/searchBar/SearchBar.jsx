import React, { useState } from "react";
import "./SearchBar.css";

const SearchBar = ({ type, placeholder, searchIcon, onChange }) => {
  const [value, setValue] = useState("");
  // const [showPassword, setShowPassword] = useState(false);
  // const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);
    onChange(inputValue); // Pass the input value to the parent component
  };

  return (
    <div className="search-container">
      <img className="search-icon">{searchIcon}</img>
      <div className="search-wrapper">
        <input
          type={type === "text"}
          placeholder={placeholder}
          value={value}
          id={search}
          onChange={handleInputChange}
          className={`search-bar ${error ? "error" : ""}`}
        />
      </div>
      {/* {error && <p className="error-message">{error}</p>} */}
    </div>
  );
};



export default SearchBar;