import React from "react";
import { useState, useEffect } from 'react';
import "./message.css";
import picture from './blank-profile-picture.png'; // currently hardcoded, replace with actual user profile pic if a profile picture is set
import { useNavigate } from 'react-router-dom';


const MessageList = ({ swap, user }) => {

    const navigate = useNavigate();

    const navigateToChat = (userId, chatUserId, chatUsername) => {
        navigate("/chat", { state: { userId, chatUserId, chatUsername } });
    };

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date()); // Update the timestamps every 60 seconds
        }, 60000);

        return () => clearInterval(interval);
    }, []);

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
        <div onClick={() => navigateToChat(user, swap._id, swap.username)}
            className='message-list'>
            <div>
                <img className='user-picture'
                    src={picture} //currently hardcoded dummy
                    alt='profile picture of {swap.username}' />
            </div>
            <div className='message-list-content'>
                <p className="message-list-username">{swap.username}</p>
                <p className="message-list-text">
                    {swap.message.text.split(' ').slice(0, 7).join(' ')}
                    ...
                </p>
            </div>
            <div>
                <p className="message-list-timestamp">{formatDateTime(swap.message.sentAt)}</p>
            </div>
        </div>

    )
}

export default MessageList;