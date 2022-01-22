import React from 'react'
import { Link } from "react-router-dom";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import "./NavBar.css";

function NavBar() {

    return (
        <div>
            <nav className='navbar'>
                <ul className='list'>
                    <p className="nav">Home</p>
                    <p className="nav">About Us</p>
                    <p className="nav">Contact Us</p>
                </ul>
            <div className="title">
                <h1>CBL Covid-19 Information ChatBot</h1>
            </div>
            </nav>
        </div>
    )
}

export default NavBar