//This component is mounted in App.jsx
import React from 'react'
import { Link } from 'react-router-dom';
import "./header.css";

export const Header = () => {
    return (
        <div className="header">

            <nav className="header-nav">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>
        </div>
    )
}