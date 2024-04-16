import React from "react";
import { useState, useEffect } from "react";
import "./message.css";
import axios from "axios";
import MessageList from "./MessageList.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../footer/Footer.jsx";

const message = () => {
  const loggedInUserId = "660e9b92453cad62e9a4f568"; // currently hardcoded, should be saved and passed down from parent for logged-in user
  const [swaps, setSwaps] = useState([]);

  useEffect(() => {
    // Function to fetch chat data
    const fetchSwaps = async () => {
      try {
        const response = await fetch(
          `https://ws24-skillswap.onrender.com/api/messages/chatlist/${loggedInUserId}`
        );
        const data = await response.json();

        setSwaps(data);
        // console.log(data[0].message, data[0].username, data[0]._id);
      } catch (error) {
        console.error("Failed to fetch chats:", error);
      }
    };

    fetchSwaps();
  }, []);

  return (
    <div className="main-view">
      <div className="headline headline-list">
        <h1 className="headline-text">Message</h1>
      </div>
      <div>
        {swaps.map((swap, index) => (
          <div>
            {<MessageList key={index} swap={swap} user={loggedInUserId} />}
          </div>
        ))}
      </div>
      <div className="headline headline-list">
        <Footer />
      </div>
    </div>
  );
};

export default message;
