// src/pages/Landing.js
import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };

    return (
        <div style={landingStyle}>
            <h1>Welcome to the Election Result Dashboard</h1>
            <p>This dashboard provides real-time election results and insights.</p>
            <button onClick={handleLoginClick}>Login</button>
        </div>
    );
};

const landingStyle = {
    textAlign: 'center',
    margin: '50px',
};

export default LandingPage;