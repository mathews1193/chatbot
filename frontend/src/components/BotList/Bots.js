import React, { useState, useEffect } from 'react';
import "./Bots.css";

function Bots() {
    
    const bots = [
        {image:'https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'Wayne Vincent'},
        {image: 'https://images.pexels.com/photos/3789888/pexels-photo-3789888.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'John Glen'},
        {image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'Sarah Johnson'},
        {image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'Madeline Brewer'},
        {image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'Jonathan Mann'},
        {image: 'https://images.pexels.com/photos/3767392/pexels-photo-3767392.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940', name: 'Karen Lee'},
      ];
   
    return (
        <div>
            <div className="bot-container">
                <div className="msg-container"> 
                    <input 
                    type = "text" 
                    className='bots'
                    placeholder="Available Bots"
                    />
                </div>

                <ul>
                    {bots.map((bot) => <li className='bot-list'> 
                    <img className="bot-img"src={bot.image} alt="Logo" width="35%" height="15%"/>{bot.name}</li>)}
                </ul>
            </div>
        </div>
    )
}

export default Bots