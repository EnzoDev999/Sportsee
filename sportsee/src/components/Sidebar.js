import React from "react";
import "../sass/components/Sidebar.scss";
import icon1 from "../assets/meditation-icon.svg";
import icon2 from "../assets/swim-icon.svg";
import icon3 from "../assets/bike-icon.svg";
import icon4 from "../assets/weight-icon.svg";

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul className="sidebar-list">
        <li className="sidebar-item">
          <img src={icon1} alt="Icon 1" className="sidebar-icon" />
        </li>
        <li className="sidebar-item">
          <img src={icon2} alt="Icon 2" className="sidebar-icon" />
        </li>
        <li className="sidebar-item">
          <img src={icon3} alt="Icon 3" className="sidebar-icon" />
        </li>
        <li className="sidebar-item">
          <img src={icon4} alt="Icon 4" className="sidebar-icon" />
        </li>
      </ul>
      <p className="copyright">Copyright, SportSee 2020</p>
    </aside>
  );
}

export default Sidebar;
