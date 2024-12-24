// src/pages/Logout.js
import React, { useEffect } from 'react';

const Logout = ({ onLogout }) => {
    useEffect(() => {
        onLogout(); // Call the logout function when the component mounts
    }, [onLogout]);

    return (
        <div>
            <h2>You have been logged out.</h2>
            <p>Please log in again to continue.</p>
        </div>
    );
};

export default Logout;