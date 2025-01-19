import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useNavigate } from "react-router-dom";

function Basic({ onLogout }) { // Passer une fonction pour gérer la déconnexion
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path); // Naviguer vers la route spécifiée
  };

  const handleLogout = () => {
    if (onLogout) {
      onLogout(); // Appeler la fonction de déconnexion si elle est fournie
    }
    navigate("/map"); // Naviguer vers la page de déconnexion
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        Log
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item onClick={() => handleNavigation("/login")}>
          LogIn
        </Dropdown.Item>
        <Dropdown.Item onClick={handleLogout}>
          LogOut
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Basic;