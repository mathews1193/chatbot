import React from 'react';
import "./NearbyLocation.css";

function NearbyLocation() {
    return (
        <div>
            <div className="nearby-container">
                <div className="header">
                    <h1>CBL Locator Tool</h1>
                <p>Help you find the nearest testing / vaccination sities, 
                    pharmaceutical stores, clinics / hospitals, churches, community centers in your area. </p> 
                </div>
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