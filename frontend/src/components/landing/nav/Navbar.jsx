import React from "react";
import PropTypes from "prop-types";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplacetxt.svg";
import { Link } from "react-router-dom";

function Navbar({ userType, setUserType }) {
  return userType === "parent" ? (
    <nav className="nav">
      <div className="logoContainer"><img src={logo} alt="Babyplace" id="logoCoeur" /><img src={logotxt} alt="Babyplace" id="logotxt" /></div>
      <button
        type="button"
        className="mainTextBtn"
        onClick={() => setUserType("pro")}
      >
        Vous êtes professionnel de la petite enfance ?
      </button>
      <div className="navRight">
        <button type="button" className="textBtn">
          Besoin d'aide ?
        </button>
        <button type="button" className="connect">
          <div>
            <span>Se connecter</span>
            <br />
            <span>Gérer mes rdv</span>
          </div>
          <span className="arrow">➜</span>
        </button>
      </div>
    </nav>
  ) : (
    <nav className="nav pro">
      <div className="logoContainer"><img src={logo} alt="Babyplace" id="logoCoeur" /><img src={logotxt} alt="Babyplace" id="logotxt" /></div>
      <ul>
        <button
          type="button"
          className="mainTextBtn"
          onClick={() => setUserType("parent")}
        >
          Vous êtes un parent ?
        </button>
      </ul>
      <div className="navBtn">
        <Link to="/register">S'enregistrer</Link>
        <Link to="/login">
          Se connecter <span>➜</span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  userType: PropTypes.string.isRequired,
  setUserType: PropTypes.func.isRequired,
};
