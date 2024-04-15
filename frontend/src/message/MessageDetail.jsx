import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AutoResizingTextarea from "./TextInput.jsx";
import "./message.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import picture from './blank-profile-picture.png'; // currently hardcoded, replace with actual user profile pic if a profile picture is set


const chat = () => {
    const location = useLocation();
    const { userId, chatUserId, chatUsername } = location.state; // access userId and chatUserId from MessageList
    //console.log(userId, chatUserId, chatUsername);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    // Function to fetch messages for this chat
    const fetchMessages = async () => {
        try {
            const response = await fetch(`https://ws24-skillswap.onrender.com/api/messages/${userId}/${chatUserId}`);
            const data = await response.json();

            setMessages(data);
            //console.log(data[0]);
        } catch (error) {
            console.error('Failed to fetch messages:', error);
        }
    };

    const handleSendMessage = async () => {
        fetchMessages(); // Refetch messages once a message has been successfully sent
    };

    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    };

    const formatTime = (DateTime) => {
        const options = { hour: 'numeric', minute: 'numeric' };
        return new Date(DateTime).toLocaleString('en-US', options);
    }

    const endOfMessagesRef = useRef(null);

    // Scroll to the bottom of the chat on initial load and when messages update
    useEffect(() => {
        endOfMessagesRef.current.scrollIntoView();
    }, [messages]);

    return (
        <div className='main-view'>
            <div className='headline'>
                <IoMdArrowRoundBack className='arrow icon' onClick={handleBack} />
                <div className='headline-chat'>
                    <img className='user-picture'
                        src={picture} //currently hardcoded dummy
                        alt='profile picture of {chatUsername}' />
                    <h1 className='headline-text headline-name'>{chatUsername}</h1>
                </div>
            </div>
            <div className="chat-window">
                {messages.map((message) => (
                    <div className={`message ${message.senderId._id === userId ? 'message-sender' : 'message-receiver'}`}>
                        <p className="message-text">{message.text}</p>
                        <p className="message-timestamp">{formatTime(message.sentAt)}</p>
                    </div>
                ))}
                <div ref={endOfMessagesRef}></div>
            </div>
            <div className="chat-footer">
                <AutoResizingTextarea
                    onMessageSent={handleSendMessage}
                    senderId={userId}
                    receiverId={chatUserId}
                /*authToken={authToken}*/ />
            </div>
        </div>
    );
}

export default chat;