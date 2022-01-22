import React from 'react';
import "./NearbyLocation.css";

function NearbyLocation() {
    return (
        <div>
            <div className="bot-container">
                <div className="msg-container"> 
                    <input 
                    type = "text" 
                    className='bots'
                    placeholder="Enter Zipcode"
                    />
                </div>
            </div>
        </div>
    )
}

export default NearbyLocation