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
        <h1>Covid-19 ChatBot</h1>
      </div>
        <div className='img'>
          <div className="chat-container">
            <div className="msg"> 
              <input 
                type = "text" 
                placeholder="Enter message here"
                onChange={getMsg}
                value={msg} 
                />
              <button onClick={getMsg}>Send</button>
            </div>
              <h1>{msg}</h1>
          </div>
        </div>  
    </div>
  );
}

export default App;
