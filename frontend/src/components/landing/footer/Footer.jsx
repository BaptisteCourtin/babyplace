import React from "react";
import PropTypes from "prop-types";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";
import up from "@assets/up.svg";
import facebook from "@assets/facebook.svg";
import twitter from "@assets/twitter.svg";
import insta from "@assets/insta.svg";
import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Footer({ userType }) {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="footerTop">
          {userType === "parent" ? (
            <p>Vous êtes professionnel de la petite enfance ? </p>
          ) : (
            <div>
              <p>Essayez c'est gratuit !</p>
              <p>Profitez d'un mois d'essai gratuit</p>
            </div>
          )}
          <div className="footerBtn">
            <button type="button">En savoir plus</button>
            <button type="button">
              Demander une démo <span>➜</span>
            </button>
          </div>
        </div>
        <div className="footerGrid">
          <div className="footerLeft">
            <div
              className="logoContainer"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" id="logoCoeur" />
              <img src={logotxt} alt="babyplace" id="logotxt" />
            </div>
            <p className="footerAddress">
              DaveWarehouse Society, 4 rue Baron 44100 NANTES
            </p>
            <p className="footerMail">
              info@davewarehouse.projet - 02.40.01.02.03
            </p>
          </div>
          <div className="footerCenter">
            <ul>
              <li><HashLink to="/features#about">A propos</HashLink></li>
              <li><HashLink to="/features#profil">Nos Profil</HashLink></li>
              <li><HashLink to="/features#technics">Caractéristiques</HashLink></li>
            </ul>
            <ul>
              <li><HashLink to="/contact#aide">Aide</HashLink></li>
              <li><HashLink to="/contact#contact">Contact</HashLink></li>
              <li><NavLink to="/faq">FAQ</NavLink></li>

            </ul>
          </div>
          <div className="footerRight">
            <div className="socials">
              <img src={facebook} alt="facebook" />
              <img src={twitter} alt="twitter" />
              <img src={insta} alt="instagram" />
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            © DaveWarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
          <button
            type="button"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={up} alt="M" />
          </button>
        </div>
      </footer>
    </>
  );
}

export default Footer;

Footer.propTypes = {
  userType: PropTypes.string.isRequired,
};
