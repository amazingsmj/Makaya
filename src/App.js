import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SideMenu from './SideMenu';
import Dashboard from './pages/Dashboard';
import CameroonMap from './components/CameroonMap';
import Help from './pages/Help';
import About from './pages/About';
import Logout from './pages/Logout';
import LandingPage from './pages/Landing'; 
import Login from './pages/Login';
import Footer from './pages/Footer';
import Header from './pages/Header';
import Bureaux from './pages/Bureaux';
import Centre from './pages/Centre';
import Candidats from './pages/Candidats';
import Map from './pages/Map';

const App = () => {
    // Lire l'état d'authentification depuis localStorage
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const storedAuth = localStorage.getItem('isAuthenticated');
        return storedAuth === 'true'; // Convertir la chaîne en booléen
    });

    const handleLogin = () => {
        setIsAuthenticated(true);
        localStorage.setItem('isAuthenticated', 'true'); // Enregistrer l'état dans localStorage
    };

    const handleLogout = () => {
        setIsAuthenticated(false);
        localStorage.removeItem('isAuthenticated'); // Supprimer l'état de localStorage
    };

    return (
      <div className="App">
        <Router>
          <Header />
          <div style={{ display: "flex" }}>
            {isAuthenticated && <SideMenu />}{" "}
            {/* Render SideMenu only if authenticated */}
            <div style={{ padding: "20px", flex: 1 }}>
              <Routes>
                <Route path="/" element={<Navigate to="/map" />} />
                <Route path="/landing" element={<LandingPage />} />
                <Route
                  path="/login"
                  element={<Login onLogin={handleLogin} />}
                />{" "}
                {/* Pass handleLogin to Login */}
                <Route
                  path="/dashboard"
                  element={<Dashboard onLogout={handleLogout} />}
                />{" "}
                {/* Accessible without authentication */}
                <Route
                  path="/bureaux"
                  element={
                    isAuthenticated ? <Bureaux /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/centre"
                  element={
                    isAuthenticated ? <Centre /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/candidats"
                  element={
                    isAuthenticated ? <Candidats /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/map"
                  element={isAuthenticated ? <Map /> : <Navigate to="/login" />}
                />
                <Route
                  path="/help"
                  element={
                    isAuthenticated ? <Help /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/about"
                  element={
                    isAuthenticated ? <About /> : <Navigate to="/login" />
                  }
                />
                <Route
                  path="/logout"
                  element={
                    isAuthenticated ? (
                      <Logout onLogout={handleLogout} />
                    ) : (
                      <Navigate to="/login" />
                    )
                  }
                />
              </Routes>
            </div>
          </div>
        </Router>
      </div>
    );
};

export default App;
