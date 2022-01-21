import React, { useState, useEffect } from 'react';

import './App.css';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() 
{
  const [userMsg, setUserMsg] = useState('');
  const [botMsg, setBotMsg] = useState('Hi, I am the Covid-19 Chatbot. Feel free to ask me any questions.');

  const getMsg = (e) => 
  {
      console.log("got Message...");
      setUserMsg(e.target.value);
  }

  return (
    <div className="App">
      <NavBar />
      <div className='container'>

      
        <div className='img'>
          <div className="chat-container">
            <p className='chatbot-header'>Chatbot</p>
            <div className='bot-msg'>
            <p>{botMsg}</p>
            </div>
            <p className='user-header'>You</p>
            <div className='user-msg'>
              <p>{userMsg}</p>
            </div>
          </div>
          <div className="msg-container"> 
            <input 
              type = "text" 
              className='msg'
              placeholder="Write your message here"
              onChange={getMsg}
              value={userMsg} 
            />
            <button className="btn-send" onClick={getMsg}>✉️ Send</button>
            </div>
        </div>  
        </div>
        <Footer/>
    </div>
  );
}

export default App;
