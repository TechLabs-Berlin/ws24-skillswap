import React from "react";
import { useState, useEffect } from 'react';
import axios from 'axios';

const chat = () => {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        // Function to fetch messages for this chat
        const fetchMessages = async () => {
            try {
                const response = await fetch('http://localhost:8000/api/messages/660e9b92453cad62e9a4f568/6611531ab2adfcc5501b5ac2');
                const data = await response.json();

                setMessages(data);
                console.log(data[0]);
            } catch (error) {
                console.error('Failed to fetch messages:', error);
            }
        };

        fetchMessages();
    }, []);

    return (
        <div><div><h1>Chat</h1></div>
            <div>
                {messages.map((message) => (
                    <div>
                        <p>{message.text}</p>
                        <p>{message.senderId.username}</p>
                        <span>{new Date(message.sentAt).toLocaleDateString()}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default chat;