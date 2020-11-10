import React, { useState } from "react";
import { FaBars } from "react-icons/fa";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);
  function menuShow() {
    showMenu ? setShowMenu(false) : setShowMenu(true);
  }

  function linkCLick() {
    setShowMenu(false);
  }
  return (
    <>
      <nav className="nav-bar">
        <div className="brand-name">Sachin Rathee</div>

        <div className="toggle-button" onClick={menuShow}>
          <FaBars className="bars" color="#FFF" size={22} />
        </div>
        <div
          className={showMenu ? "show-menu menu-items" : "hide-menu menu-items"}
        >
          <ul>
            <li className={showMenu ? "profileImageShow" : "profileImageHide"}>
              <div className="profile-bg">
                <div className="profile"></div>
              </div>
            </li>
            <li onClick={linkCLick}>
              <a href="#section1">About</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section2">Experience</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section3">Education</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section4">Skills</a>
            </li>
            <li onClick={linkCLick}>
              <a href="#section4">Interests</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Sidebar;
