import React, { useState, useRef, useEffect } from 'react';
import "./message.css";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import EmojiPicker from 'emoji-picker-react';
import axios from 'axios';


function AutoResizingTextarea({ senderId, receiverId, onMessageSent/*, authToken*/ }) {
    const [value, setValue] = useState('');
    const textareaRef = useRef(null);

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    // Automatically adjust the height of the textarea to fit the content
    useEffect(() => {
        const textarea = textareaRef.current;
        textarea.style.height = 'auto'; // Reset height to auto to reduce it if text is deleted
        textarea.style.height = `${textarea.scrollHeight}px`; // Set height equal to scroll height
    }, [value]); // Dependency array includes value to trigger update on every change

    const [showEmojiPicker, setShowEmojiPicker] = useState(false);
    const handleEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker);
        //console.log(showEmojiPicker);
    }

    const handleSendClick = () => {
        const sendMessage = async (senderId, receiverId, value/*, authToken*/) => {
            const url = 'https://ws24-skillswap.onrender.com/api/messages/create';
            const data = {
                senderId: senderId,
                receiverId: receiverId,
                text: value
            };
            console.log(senderId, receiverId, value);
            const auth = {
                headers: {
                    // 'Authorization': `${authToken}`
                }
            };

            try {
                const response = await axios.post(url, data, auth);
                console.log('Message sent successfully:', response.data);
                setValue('');
                if (onMessageSent) {
                    onMessageSent(); //refetch messages in MessageDetail
                }
            } catch (error) {
                console.error('Error sending message:', error.response ? error.response.data : error.message);
                throw error;
            }
        };
        sendMessage(senderId, receiverId, value/*, authToken*/);
    }


    return (
        <div className='input-component'>
            <HiOutlineEmojiHappy
                onClick={handleEmojiPicker}
                className='smiley icon' />
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="Type your message..."
                className='input-area'
            />
            <button
                onClick={handleSendClick}
                className='send-button'
            >
                ➤
            </button>
            {showEmojiPicker &&
                <div className='emoji-component'>
                    <EmojiPicker
                        onEmojiClick={(emoji) =>
                            setValue((prevValue) =>
                                prevValue + emoji.emoji)} />
                </div>
            }
        </div>
    );
}

export default AutoResizingTextarea;