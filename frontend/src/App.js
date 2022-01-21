import React from 'react';

import './App.css';
import Bots from './components/BotList/Bots';
import Chatbot from './components/Chatbot/Chatbot';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';

function App() 
{
  return (
    <div className="App">
      <NavBar />
      <div className='container'>
        <div className="grid">
          <Bots/>
          <Chatbot/>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
