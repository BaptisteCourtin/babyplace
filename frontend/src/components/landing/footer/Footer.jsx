import React from "react";
import PropTypes from "prop-types";
import logo from "@assets/logo.svg";

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
            <div className="footerLogo">
              <img src={logo} alt="" />
              <p>Babyplace</p>
            </div>
            <p className="footerAddress">
              Warehouse Society, 234 Bahagia Ave Street PRBW 29281
            </p>
            <p className="footerMail">
              info@warehouse.project 1-232-3434 (Main)
            </p>
          </div>
          <div className="footerRight">
            <ul>
              <li>About</li>
              <li>Profile</li>
              <li>Features</li>
              <li>Careers</li>
              <li>DW News</li>
            </ul>
            <ul>
              <li>Help</li>
              <li>Support</li>
              <li>Guide</li>
              <li>Reports</li>
              <li>Q&A</li>
            </ul>
            <ul>
              <li>Social Media</li>
              <div>
                <li>F</li>
                <li>T</li>
                <li>I</li>
              </div>
            </ul>
          </div>
        </div>
        <div className="footerBottom">
          <p>
            © Datawarehouse™, 2020. All rights reserved.
            <br />
            Company Registration Number: 21479524.
          </p>
          <button type="button">
            <img src="" alt="M" />
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
