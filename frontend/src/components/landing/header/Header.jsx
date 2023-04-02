import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import headerImg from "@assets/landing page/image1.svg";
import { useNavigate } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import mother from "@assets/app parents/mom2.png";

function Header({ userType }) {
  const navigate = useNavigate();

  // --- montre la fleche ou non ---
  const [showArrow, setShowArrow] = useState(true);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 100) {
        setShowArrow(false);
      } else {
        setShowArrow(true);
      }
    });
  }, []);

  return userType === "parent" ? (
    <header className="header">
      <div className="leftPart">
        <h1>
          Réservez une place auprès de professionnels de la petite enfance
          gratuitement en quelques clics
        </h1>
        <div className="headerInputs">
          <button type="button" onClick={() => navigate("/appli/search")}>
            Rechercher <span>➜</span>
          </button>
        </div>
      </div>
      <div className="imageContainer">
        <img src={mother} alt="mother & baby" />
      </div>
      {showArrow && <div className="scrollDown">&#10095;</div>}
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
      {showArrow && <div className="scrollDown">&#10095;</div>}
    </header>
  );
}

export default Header;

Header.propTypes = {
  userType: PropTypes.string.isRequired,
};
