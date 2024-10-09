// Sidebar.js
import React from 'react';
import { useLocation } from "react-router-dom";


  

const Sidebar = ({ isOpen, toggleSidebar }) => {
    const location = useLocation();

  const isActive = (path) => location.pathname === path;
    return (
        <div className={`sidebar ${isOpen ? 'open' : ''}`}>
            <button className="close-btn" onClick={toggleSidebar}>×</button>
            <div >
            <ul className="nav-humburger-container">
              <li style={{paddingTop: "50px"}}>
                <a
                  className={isActive("/") ? "active" : "li-container"}
                  href="/"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={isActive("/Services") ? "active" : "li-container"}
                  href="/Services"
                >
                  Service
                </a>
              </li>
              <li>
                <a
                  className={isActive("/Project") ? "active" : "li-container"}
                  href="/Project"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  className={isActive("/Team") ? "active" : "li-container"}
                  href=""
                >
                  Our Team
                </a>
              </li>
              <li>
                <a
                  className={isActive("/Contacts") ? "active" : "li-container"}
                  href="/Contacts"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
    );
};

export default Sidebar;
