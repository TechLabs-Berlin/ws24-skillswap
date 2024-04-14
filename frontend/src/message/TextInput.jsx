import React, { useState, useRef, useEffect } from 'react';
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
        console.log(showEmojiPicker);
    }

    const handleSendClick = () => {
        const sendMessage = async (senderId, receiverId, value/*, authToken*/) => {
            const url = 'http://localhost:8000/api/messages/create';
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
        <div style={{ flex: 1, position: 'relative', marginTop: '10px' }}>
            <HiOutlineEmojiHappy
                onClick={handleEmojiPicker}
                style={{ fontSize: '50px', marginRight: 20 }} />
            <textarea
                ref={textareaRef}
                value={value}
                onChange={handleChange}
                placeholder="Type your message..."
                style={{
                    width: '70%', // Ensure the textarea takes up the full container width
                    padding: '10px',
                    boxSizing: 'border-box', // Include padding in width and height
                    border: '1px solid #ccc',
                    borderRadius: '20px', // Rounded corners
                    resize: 'none', // Disable manual resize
                    overflow: 'hidden' // Hide scrollbar
                }}
            />
            <button
                onClick={handleSendClick}
                style={{
                    position: 'absolute',
                    right: '10px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    borderRadius: '50%',
                    width: '50px',
                    height: '50px',
                    border: 'none',
                    background: 'black',
                    color: 'white',
                    cursor: 'pointer'
                }}
            >
                ➤
            </button>
            {showEmojiPicker &&
                <EmojiPicker style={{ height: 500 }}
                    onEmojiClick={(emoji) =>
                        setValue((prevValue) =>
                            prevValue + emoji.emoji)} />
            }
        </div>
    );
}

export default AutoResizingTextarea;