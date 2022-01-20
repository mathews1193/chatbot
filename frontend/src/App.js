import React, { useState, useEffect } from 'react';

import './App.css';

function App() 
{
  const [msg, setMsg] = useState('');

  const getMsg = (e) => 
  {
      console.log("got Message...");
      setMsg(e.target.value);
  }

  return (
    <div className="App">
      <div className="title">
        <h1>CBL Covid-19 ChatBot</h1>
      </div>
        <div className='img'>
          <div className="chat-container">
            <p className='chatbot-header'>Chatbot</p>
            <div className='bot-msg'>
            <p>Hi, I am the Covid-19 Chatbot. Feel free to ask me any questions.</p>
            </div>
            <p className='user-header'>You</p>
            <div className='user-msg'>
              <p>{msg}</p>
            </div>
          </div>
          <div className="msg-container"> 
            <input 
              type = "text" 
              className='msg'
              placeholder="Enter message here"
              onChange={getMsg}
              value={msg} 
            />
            <button onClick={getMsg}>✉️ Send</button>
            </div>
        </div>  
    </div>
  );
}

export default App;
