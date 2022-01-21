import React, { useState, useEffect } from 'react';
import "./Bots.css";

function Bots() {
    const [botName, setBotName] = useState('');
   
    return (
        <div>
            <div className="bot-container">
                <p className='bot-header'>Chatbot</p>
                <div className="msg-container"> 
                    <input 
                    type = "text" 
                    className='msg'
                    placeholder="Enter Bot Name Here "
                    value={botName} 
                    />
                </div>
            </div>
        </div>
    )
}

export default Bots