// Footer.jsx
import React from 'react';
import './Footer.css'; // Import the CSS file for styling
import { IoMdHome, IoIosSearch } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-icons">
                <Link to="/home" style={{ color: 'white' }}>
                    <IoMdHome/>
                </Link>
                <Link to="/search" style={{ color: 'white' }}>
                    <IoIosSearch/>
                </Link>
                <Link to="/" style={{ color: 'white' }}>
                    <FaRegUser/>
                </Link>
            </div>
        </footer>
    );
};

export default Footer;