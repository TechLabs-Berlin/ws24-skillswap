import React from "react";
import { useState, useEffect } from 'react';
import "./message.css";
import axios from 'axios';
import MessageList from "./MessageList.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";
import Footer from "../footer/Footer.jsx";

// const userId = '';
// const user = await axios.get(url, {header: {}, params: {},});

const message = () => {
    const [swaps, setSwaps] = useState([]);

    useEffect(() => {
        // Function to fetch chat data
        const fetchSwaps = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/messages/chatlist/660e9b92453cad62e9a4f568');
                const data = await response.json();

                setSwaps(data);
                console.log(data[0].message, data[0].username, data[0]._id);
            } catch (error) {
                console.error('Failed to fetch chats:', error);
            }
        };

        fetchSwaps();
    }, []);


    return (
        <div className='main-view'>
            <div className='headline headline-list'>

                <h1 className='headline-text'>Message</h1>

            </div>
            <div>
                {swaps.map((swap, index) => (
                    <div>{<MessageList key={index} swap={swap} />}</div>
                ))}

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default message;