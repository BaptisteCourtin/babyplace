import React from "react";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";
import { NavLink } from "react-router-dom";

function NavbarLite() {
  return (
    <div className="navbarLite">
      <nav className="nav proLite">
        <NavLink to="/">
          <div className="logoContainerLite">
            <img src={logo} alt="Babyplace" id="logoCoeur" />
            <img src={logotxt} alt="Babyplace" id="logotxt" />
          </div>
        </NavLink>

        <div className="navBtnLite">
          <NavLink to="/">Retourner à l'accueil</NavLink>
        </div>
      </nav>
    </div>
  );
}

export default NavbarLite;
