import React from "react";
import { useState, useEffect } from 'react';
import picture from './profile-pic-dummy.jpg';
import { useNavigate } from 'react-router-dom';





const MessageList = ({ swap }) => {
    const loggedInUserId = '660e9b92453cad62e9a4f568'; // currently hardcoded
    const navigate = useNavigate()
    const navigateToChat = (userId, chatUserId, chatUsername) => {
        navigate("/chat", { state: { userId, chatUserId, chatUsername } });
    };

    function formatDateTime(dateTime) {
        const date = new Date(dateTime);
        const now = new Date();
        const diffInSeconds = Math.floor((now - date) / 1000);
        const diffInMinutes = Math.floor(diffInSeconds / 60);
        const diffInHours = Math.floor(diffInMinutes / 60);

        // If within the last 60 seconds
        if (diffInSeconds < 60) {
            return 'now';
        }

        // If within the last 60 minutes
        if (diffInMinutes < 60) {
            return `${diffInMinutes} min ago`;
        }

        // If within the last 24 hours
        if (diffInHours < 24) {
            return `${diffInHours} hr ago`;
        }

        // More than 24 hours ago, return the date in DD/MM/YY format
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: '2-digit'
        });
    }

    return (
        <div onClick={() => navigateToChat(loggedInUserId, swap._id, swap.username)}
            style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: '10px',
                borderBottom: '0.7px solid #D0D0D0',
                padding: '10px'
            }}>
            <div>
                <img style={{
                    width: 50,
                    height: 50,
                    borderRadius: 25,
                    objectFit: 'cover'
                }}
                    src={picture} //currently hardcoded dummy
                    alt='profile picture of {swap.username}' />
            </div>
            <div style={{ flex: 1 }}><p style={{
                fontSize: 15,
                fontWeight: 500
            }}>{swap.username}</p>
                <p style={{
                    marginTop: 3,
                    fontSize: 12,
                    fontWeight: 500
                }}>{swap.message.text.split(' ').slice(0, 7).join(' ')}...</p>
            </div>
            <div>
                <p style={{
                    fontSize: 10,
                    fontWeight: 400
                }}>{formatDateTime(swap.message.sentAt)}</p>
            </div>
        </div>

    )
}

export default MessageList;