import React, { useState } from 'react';
import { Image, Typography } from "antd";
import Basic from "../components/Button";

const Header: React.FC<HeaderProps> = ({ onLogout }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    const storedAuth = localStorage.getItem("isAuthenticated");
    return storedAuth === "true"; // Convertir la chaîne en booléen
  });



  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Supprimer l'état de localStorage
    onLogout();
  };

  // Style pour le header
  const headerStyle = {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 20px 4px 12px',
    borderBottom: '1px solid rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={headerStyle}>
      <Image width={40} src="./V4.jpg" />
      <Typography.Title level={3} style={{ margin: 0 }}>
        Election Mapping
      </Typography.Title>
      <Basic onLogout={handleLogout} />
      {/* Bouton menu dropdown */}
      {isAuthenticated && <Basic onLogout={handleLogout} />}
    </div>
  );
};

interface HeaderProps {
  onLogout: () => void;
}

export default Header;
