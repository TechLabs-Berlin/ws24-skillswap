import React, { useState } from "react";
import "./InputBox.css";

const InputBox = ({ type, placeholder, label, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="input-container">
      <label className="input-label">{label}</label>
      <div className="input-wrapper">
        <input
          type={type === "password" && !showPassword ? "password" : "text"}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`input-box ${error ? "error" : ""}`}
        />
        {type === "password" && (
          <button
            type="button"
            className="toggle-password"
            onClick={handlePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default InputBox;
