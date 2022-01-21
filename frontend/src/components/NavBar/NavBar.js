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
                    <h3 className="nav">Home</h3>
                    <h3 className="nav">About Us</h3>
                    <h3 className="nav">Contact Us</h3>
                </ul>
            <div className="title">
                <h1>CBL Covid-19 Information ChatBot</h1>
            </div>
            </nav>
        </div>
    )
}

export default NavBar