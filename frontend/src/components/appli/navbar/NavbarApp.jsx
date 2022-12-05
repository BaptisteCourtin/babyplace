import React from "react";

import grid from "@assets/app parents/navbar/grid.svg";
import loupe from "@assets/app parents/navbar/loupe.svg";
import user from "@assets/app parents/navbar/user.svg";
import bell from "@assets/app parents/navbar/bell.svg";
import message from "@assets/app parents/navbar/message.svg";

import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <NavLink to="/appli/menu">
        <img src={grid} alt="grid" />
      </NavLink>
      <NavLink to="/appli/search">
        <img src={loupe} alt="loupe" />
      </NavLink>
      <NavLink to="/appli/user">
        <img src={user} alt="user" />
      </NavLink>
      <NavLink to="/appli/notif">
        <img src={bell} alt="bell" />
      </NavLink>
      <NavLink to="/appli/message">
        <img src={message} alt="message" />
      </NavLink>
    </div>
  );
}

export default Navbar;
