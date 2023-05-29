// import "animate.css";
import { HiBars3 } from "react-icons/hi2";
import { useState } from "react";
const NavBar = () => {
  return (
    <div className="navBAR">
      <h3 style={{ color: "white" }}>
        <b>E-notes</b>
      </h3>
      <ul style={{ display: "flex" }}>
        <li className="link" onClick={() => {}}>
          <p style={{ color: "white" }}>Login</p>
        </li>
        <li className="link" onClick={() => {}}>
          <p style={{ color: "white" }}>Logout</p>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
