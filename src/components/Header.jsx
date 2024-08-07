import React from "react";
import { FiMail } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosNotificationsOutline } from "react-icons/io";
import "../CSS/Header.css";
import { RxHamburgerMenu } from "react-icons/rx";
const Header = () => {
  return (
    <header className="header">
      <div>
        <RxHamburgerMenu style={{ marginRight: "10px" }} />
        <input type="text" placeholder="Search" />
      </div>
      <div className="user-menu">
        <span className="notification-icon">🔔</span>
        <span className="user-icon">👤</span>
      </div>
    </header>
  );
};

export default Header;
