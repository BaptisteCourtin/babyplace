import React from "react";
import PropTypes from "prop-types";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";
import { FaChevronUp } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
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
            <button type="button">
              <HashLink to="/contact#contact">En savoir plus</HashLink>
            </button>
            <button type="button">
              <HashLink to="/contact#contact">
                Demander une démo <span>➜</span>
              </HashLink>
            </button>
          </div>
        </div>
        <div className="footerGrid">
          <div className="footerLeft">
            <button
              className="logoContainer"
              type="button"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              <img src={logo} alt="logo" id="logoCoeur" />
              <img src={logotxt} alt="babyplace" id="logotxt" />
            </button>
            <p className="footerAddress">
              DaveWarehouse Society, 4 rue Baron 44100 NANTES
            </p>
            <p className="footerMail">
              info@davewarehouse.projet - 02.40.01.02.03
            </p>
          </div>
          <div className="footerCenter">
            <ul>
              <li>
                <HashLink to="/features#about">A propos</HashLink>
              </li>
              <li>
                <HashLink to="/features#profil">Nos Profils</HashLink>
              </li>
              <li>
                <HashLink to="/features#mentions">Mentions Légales</HashLink>
              </li>
            </ul>
            <ul>
              <li>
                <HashLink to="/contact#aide">Aide</HashLink>
              </li>
              <li>
                <HashLink to="/contact#contact">Contact</HashLink>
              </li>
              <li>
                <HashLink to="/faq#faq">FAQ</HashLink>
              </li>
            </ul>
          </div>
          <div className="footerRight">
            <div className="socials">
              <a
                href="https://fr-fr.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsFacebook id="iconFooter" />
              </a>
              <a
                href="https://twitter.com/?lang=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <BsTwitter id="iconFooter" />
              </a>
              <a
                href="https://www.instagram.com/?hl=fr"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillInstagram id="iconFooter2" />
              </a>
            </div>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            © DaveWarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
          <button
            type="submit"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <FaChevronUp id="chevronUp" />
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
