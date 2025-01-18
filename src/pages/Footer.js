import React from 'react';
import { Typography } from "antd";

function Footer() {
  // Styles en tant qu'objet JavaScript
  const footerStyle = {
    height: '50px',
    display: 'flex',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderTop: '1px solid rgba(0, 0, 0, 0.15)',
  };

  return (
    <div style={footerStyle}>
      <Typography.Link href="tel:+123456789">View Map</Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        View Map
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target={"_blank"}>
        About Us
      </Typography.Link>
    </div>
  );
}

export default Footer;
