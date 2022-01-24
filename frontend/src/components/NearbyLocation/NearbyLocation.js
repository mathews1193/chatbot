import React from 'react';
import "./NearbyLocation.css";

function NearbyLocation() {
    return (
        <div>
            <div className="nearby-container">
                <div className="nearby-msg-container"> 
                    <input 
                    type = "text" 
                    className='nearby-location'
                    placeholder="Enter Zipcode"
                    />
                </div>
            </div>
        </div>
    )
}

export default NearbyLocation