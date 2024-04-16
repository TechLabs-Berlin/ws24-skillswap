// Footer.jsx
import React from "react";
import "./Footer.css"; // Import the CSS file for styling
import { IoMdHome, IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { LuMessageSquare } from "react-icons/lu";

const Footer = () => {
<<<<<<< HEAD
  return (
    <footer className="footer">
      <div className="footer-icons">
        <Link to="/homepage" style={{ color: "white" }}>
          <IoMdHome />
        </Link>
        <Link to="/search" style={{ color: "white" }}>
          <IoIosSearch />
        </Link>
        <Link to="/message" style={{ color: "white" }}>
          <LuMessageSquare />
        </Link>
        <Link to="/" style={{ color: "white" }}>
          <FaRegUser />
        </Link>
      </div>
    </footer>
  );
=======

    return (
        <footer className="footer">
            <div className="footer-icons">
                <Link to="/home" style={{ color: 'white' }}>
                    <IoMdHome />
                </Link>
                <Link to="/search" style={{ color: 'white' }}>
                    <IoIosSearch />
                </Link>
                <Link to='/message' style={{ color: 'white' }}>
                    <LuMessageSquare />
                </Link>
                <Link to="/" style={{ color: 'white' }}>
                    <FaRegUser />
                </Link>
            </div>
        </footer>
    );

>>>>>>> 06b05b0ebf664b003389df2a71fe4fff3bacbc73
};

export default Footer;
