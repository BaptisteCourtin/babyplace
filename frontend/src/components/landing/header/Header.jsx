import React from "react";
import PropTypes from "prop-types";
import headerImg from "@assets/landing page/image1.svg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Header({ userType }) {
  const navigate = useNavigate();

  return userType === "parent" ? (
    <header className="header">
      <h1>
        Réservez une place auprès de professionnels de la petite enfance
        gratuitement en quelques clics
      </h1>
      <div className="headerInputs">
        <input
          type="text"
          name="type"
          id="type"
          placeholder="Assistante maternelle, crèche, ..."
        />
        <input type="text" name="date" id="date" placeholder="Date" />
        <input type="text" name="place" id="place" placeholder="Où" />
        <button type="submit" onClick={() => navigate("/appli")}>
          Rechercher <span>➜</span>
        </button>
      </div>
    </header>
  ) : (
    <header className="headerPro">
      <div className="headerProMain">
        <h1>Babyplace</h1>
        <p>
          Gagnez du temps en optimisant votre agenda au quotidien
          <br />
          Inscrivez-vous sur Babyplace maintenant pour saisir toutes les
          opportunités autour de chez vous
          <br />
          Inscription gratuite et sans engagement
          <br />
          Interface facile à utiliser pour vous permettre d’optimiser vos
          rendez-vous
          <br />
          Communication directe et simplifiée avec les parents
          <br />
        </p>
        <button type="button">
          <HashLink to="/contact#contact">En savoir plus</HashLink>
        </button>
      </div>
      <img src={headerImg} alt="" />
    </header>
  );
}

export default Header;

Header.propTypes = {
  userType: PropTypes.string.isRequired,
};
