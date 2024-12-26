import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
    return (
        <div style={menuStyle}>
            <h3>Menu</h3>
            <ul style={listStyle}>
                <li>
                    <Link to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link to="/bureaux">Bureaux</Link>
                </li>
                <li>
                    <Link to="/map">Map</Link>
                </li>
                <li>
                    <Link to="/help">Help</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/logout">Logout</Link>
                </li>
            </ul>
        </div>
    );
};

const menuStyle = {
    width: '200px',
    padding: '20px',
    background: '#f4f4f4',
    borderRight: '1px solid #ccc',
};

const listStyle = {
    listStyleType: 'none',
    padding: 0,
};

export default SideMenu;