import React from "react";
import PropTypes from "prop-types";
import headerImg from "@assets/landing page/image1.svg";

function Header({ userType }) {
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
        <button type="submit">
          Rechercher <span>➜</span>
        </button>
      </div>
    </header>
  ) : (
    <header className="headerPro">
      <div className="headerProMain">
        <h1>Babyplace</h1>
        <p>
          Gagnez du temps en optimisant votre agenda au quotdien
          <br />
          Installez le logiciel Babyplace maintenant pour saisir toutes les
          opportunités autour de chez vous
          <br />
          Souscription au logiciel Babyplace sans engagement
          <br />
          Logiciel facile a utiliser pour vous permettre d’optimiser vos
          rendez-vous
          <br />
          Communication directe et simplifiée avec les parents
          <br />
        </p>
        <button type="button">En savoir plus</button>
      </div>
      <img src={headerImg} alt="" />
    </header>
  );
}

export default Header;

Header.propTypes = {
  userType: PropTypes.string.isRequired,
};
