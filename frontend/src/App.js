import React from 'react';

import './App.css';
import Bots from './components/BotList/Bots';
import Chatbot from './components/Chatbot/Chatbot';
import Footer from './components/Footer/Footer';
import NavBar from './components/NavBar/NavBar';
import NearbyLocation from './components/NearbyLocation/NearbyLocation';

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
        <NearbyLocation/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
