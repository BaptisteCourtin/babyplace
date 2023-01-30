import React from "react";
import { Link } from "react-router-dom";
import logo from "@assets/logo5white.svg";

function Nav() {
  return (
    <nav className="adminNav">
      <ul>
        <img src={logo} alt="logo" />
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/appli/search">Liste</Link>
        </li>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
        <li>
          <Link to="/admin/messages">Messages</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
