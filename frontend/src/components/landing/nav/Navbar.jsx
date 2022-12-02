import React from "react";
import PropTypes from "prop-types";
import logo from "@assets/logo.svg";
import { Link } from "react-router-dom";

function Navbar({ userType, setUserType }) {
  return userType === "parent" ? (
    <nav className="nav">
      <img src={logo} alt="Babyplace" />
      <button
        type="button"
        className="textBtn"
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
      <img src={logo} alt="Babyplace" />
      <ul>
        <button
          type="button"
          className="textBtn"
          onClick={() => setUserType("parent")}
        >
          Vous êtes un parent ?
        </button>
      </ul>
      <div className="navBtn">
        <Link to='/register'>S'enregistrer</Link>
        <button type="button">
          Se connecter <span>➜</span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;

Navbar.propTypes = {
  userType: PropTypes.string.isRequired,
  setUserType: PropTypes.func.isRequired,
};
