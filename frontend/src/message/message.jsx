import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

// const userId = '';
// const user = await axios.get(url, {header: {}, params: {},});

const message = () => {
    const [chats, setChats] = useState([]);

    useEffect(() => {
        // Function to fetch chat data
        const fetchChats = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/messages/chatlist/660e9b92453cad62e9a4f568');
                const data = await response.json();

                setChats(data);
                console.log(data[0].message, data[0].username);
            } catch (error) {
                console.error('Failed to fetch chats:', error);
            }
        };

        fetchChats();
    }, []);

    return (
        <div><div><h1>Message</h1></div>
            <div>
                {chats.map((chat) => (
                    //<div key={chat.id} className="chat-preview">
                    //<img src={chat.user.profilePic} alt={`${chat.user.username}'s profile`} />
                    <div>
                        <h4>{chat.username}</h4>
                        <p>{chat.message.text.split(' ').slice(0, 5).join(' ')}...</p>
                        <span>{new Date(chat.message.sentAt).toLocaleDateString()}</span>
                    </div>
                    //</div>
                ))}
            </div>
        </div>
    );
    //return (<h1>Hello</h1>);
}

export default message;