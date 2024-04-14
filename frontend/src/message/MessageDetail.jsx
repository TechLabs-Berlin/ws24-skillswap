import React from "react";
import { useState, useEffect, useRef } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AutoResizingTextarea from "./TextInput.jsx";
import { IoMdArrowRoundBack } from "react-icons/io";
import axios from 'axios';
import picture from './profile-pic-dummy.jpg'; // replace with actual user profile pic

const chat = () => {
    const location = useLocation();
    const { userId, chatUserId, chatUsername } = location.state; // access userId and chatUserId from MessageList
    console.log(userId, chatUserId, chatUsername);
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        fetchMessages();
    }, []);

    // Function to fetch messages for this chat
    const fetchMessages = async () => {
        try {
            const response = await fetch(`http://localhost:8000/api/messages/${userId}/${chatUserId}`);
            const data = await response.json();

            setMessages(data);
            console.log(data[0]);
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
        <div style={{ display: 'flex', flexDirection: 'column', height: '100vh', width: '100%', backgroundColor: '#F0F0F0' }}>
            <div style={{ display: 'flex', flexDirection: 'row', flex: 'none', alignItems: 'center', gap: 10, backgroundColor: '#FFFFFF' }}>
                <IoMdArrowRoundBack size={30} onClick={handleBack} />
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginLeft: 15 }}>
                    <img style={{
                        width: 50,
                        height: 50,
                        borderRadius: 25,
                        objectFit: 'cover'
                    }}
                        src={picture} //currently hardcoded dummy
                        alt='profile picture of {chatUsername}' />
                    <h1 style={{ marginLeft: 5, fontSize: 15, fontWeight: 'bold' }}>{chatUsername}</h1>
                </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', flex: 1, overflowY: 'auto', width: '100%' }}>
                {messages.map((message) => (
                    <div style={{
                        backgroundColor: message.senderId._id === userId ? '#DCF8C6' : 'white',
                        alignSelf: message.senderId._id === userId ? 'flex-end' : 'flex-start',
                        padding: 8,
                        margin: 10,
                        borderRadius: 7,
                        maxWidth: '60%'
                    }}>
                        <p style={{ fontSize: 13, textAlign: 'left' }}>{message.text}</p>
                        <p style={{ fontSize: 9, textAlign: 'right', color: 'grey', marginTop: 5 }}>{formatTime(message.sentAt)}</p>
                    </div>
                ))}
                <div ref={endOfMessagesRef}></div>
            </div>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flex: 'none',
                alignItems: 'center',
                width: '100%',
                padding: 10,
                borderTopWidth: 1,
                borderTopColor: '#dddddd',
                marginBottom: 25,
            }}>
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