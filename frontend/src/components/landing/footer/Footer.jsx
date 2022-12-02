import React from "react";
import logo from "@assets/logo-blanc.svg";

function Footer() {
  return (
    <>
      <hr />
      <footer className="footer">
        <div className="footerTop">
          <p>Vous êtes professionnel de la petite enfance ? </p>
          <div className="footerBtn">
            <button>En savoir plus</button>
            <button>
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
      </footer>
    </>
  );
}

export default Footer;
