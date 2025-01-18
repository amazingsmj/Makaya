import React, { useState, useEffect } from 'react';
import {
  AppstoreOutlined,
  BankOutlined,
  TeamOutlined,
  SolutionOutlined,
  GlobalOutlined
} from "@ant-design/icons";
import { Menu } from "antd";
import { useLocation, useNavigate } from "react-router-dom";

const SideMenu = () => {
  const location = useLocation();
  const [selectedKeys, setSelectedKeys] = useState("/");

  useEffect(() => {
    const pathName = location.pathname;
    setSelectedKeys(pathName);
  }, [location.pathname]);

  const navigate = useNavigate();

  // Objets de style
  const sideMenuStyle = {
    height: '100%',
    backgroundColor: '#333',
  };

  const sideMenuVerticalStyle = {
    height: '100%',
    width: '200px',
    padding: '10px',
    borderRight: '1px solid #ccc',
  };

  return (
    <div style={sideMenuStyle}>
      <Menu
        style={sideMenuVerticalStyle}
        mode="vertical"
        onClick={(item) => {
          navigate(item.key);
        }}
        selectedKeys={[selectedKeys]}
        items={[
          {
            label: "Dashboard",
            icon: <AppstoreOutlined />,
            key: "/dashboard",
          },
          {
            label: "Bureaux de votes",
            key: "/bureaux",
            icon: <SolutionOutlined />,
          },
          {
            label: "Centre de vote",
            key: "/centre",
            icon: <BankOutlined />,
          },
          {
            label: "Candidats",
            key: "/candidats",
            icon: <TeamOutlined />,
          },
          {
            label: "Map",
            key: "/map",
            icon: <GlobalOutlined />,
          },
        ]}
      />
    </div>
  );
};

export default SideMenu;
