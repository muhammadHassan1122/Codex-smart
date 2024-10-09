import React, { useState } from "react";
import Sidebar from "../component/Sidebar.js";

import Logo from "../images/Logo.png";
import { useLocation } from "react-router-dom";

function Navbar(props) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <nav className="Navbar-container">
        <div className="Navbar-small-container">
          <div className="humburger-img-dflex">
            <div id="logo-img">
              <img
                style={{ paddingTop: "10px", cursor: "pointer" }}
                src={Logo}
                width={130}
                alt=""
              />
            </div>

            <i
              class="fa-solid fa-bars humburger-icon"
              onClick={toggleSidebar}
            ></i>
          </div>

          <div style={{ width: "60%" }} className="my-box-container">
            <ul className="nav-li-container">
              <li>
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
      </nav>
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
    </div>
  );
}

export default Navbar;
