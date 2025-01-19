import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import SideMenu from "./SideMenu";
import Dashboard from "./pages/Dashboard";
import Help from "./pages/Help";
import About from "./pages/About";
import Logout from "./pages/Logout";
import LandingPage from "./pages/Landing";
import Login from "./pages/Login";
import Header from "./pages/Header";
import Bureaux from "./pages/Bureaux";
import Centre from "./pages/Centre";
import Candidats from "./pages/Candidats";
import Map from "./pages/Map";
//import Basic from "./components/Button"; // Assurez-vous d'importer le composant Basic

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true"; // Convertir la chaîne en booléen
  });

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Enregistrer l'état dans localStorage
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Supprimer l'état de localStorage
  };

  return (
    <div className="App">
      <Router>
        <Header isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        <div style={{ display: "flex" }}>
          {/* Afficher SideMenu uniquement si authentifié et pas sur la page de la carte */}
          {isAuthenticated && window.location.pathname !== "/map" && <SideMenu />}
          <div style={{ padding: "20px", flex: 1 }}>
           {/*  <Basic onLogout={handleLogout} /> Intégrer le composant Basic */}
            <Routes>
              <Route path="/" element={<Navigate to="/map" />} />
              <Route path="/map" element={<Map />} /> {/* Accessible à tous */}
              <Route path="/landing" element={<LandingPage />} />
              <Route path="/login" element={<Login onLogin={handleLogin} />} />
              
              {/* Routes protégées */}
              <Route
                path="/dashboard"
                element={
                  isAuthenticated ? (
                    <Dashboard onLogout={handleLogout} />
                  ) : (
                    <Navigate to="/login" />
                  )
                }
              />
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
              {/* Redirection vers la page de connexion si non authentifié */}
              <Route path="*" element={<Navigate to={isAuthenticated ? "/map" : "/login"} />} />
            </Routes>
          </div>
        </div>
      </Router>
    </div>
  );
};

export default App;