import React from "react";
import { useState, useEffect } from 'react';
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
        <div style={{ height: '100vh', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 'none', justifyContent: 'center', alignItems: 'center', gap: 10, width: '100%' }}>

                <h1 style={{ fontSize: 15, fontWeight: 'bold' }}>Message</h1>

            </div>
            <div>
                {swaps.map((swap, index) => (
                    //<div key={chat.id} className="chat-preview">
                    //<img src={chat.user.profilePic} alt={`${chat.user.username}'s profile`} />
                    // <div>
                    //   <h4>{chat.username}</h4>
                    //   <p>{chat.message.text.split(' ').slice(0, 5).join(' ')}...</p>
                    //   <span>{new Date(chat.message.sentAt).toLocaleDateString()}</span>
                    //  </div>
                    //</div>
                    <div>{<MessageList key={index} swap={swap} />}</div>
                ))}

            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
    //return (<h1>Hello</h1>);
}

export default message;