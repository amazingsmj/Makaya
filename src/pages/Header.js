import React from 'react';
import { Image, Typography } from "antd";
import Basic from "../components/Button";

interface HeaderProps {
  isAuthenticated: boolean;
  onLogout: () => void;
}

const Header: React.FC<HeaderProps> = ({ isAuthenticated, onLogout }) => {
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
      {/* Bouton menu dropdown */}
      {isAuthenticated && <Basic onLogout={onLogout} />}
    </div>
  );
};

export default Header;
