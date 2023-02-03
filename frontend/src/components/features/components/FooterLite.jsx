import React from "react";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";
import { FaChevronUp } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { HashLink } from "react-router-hash-link";

function FooterLite() {
  return (
    <div className="footerLite">
      <div className="footerGridLite">
        <div className="footerLeftLite">
          <div
            className="logoContainerLite"
            onClick={() => {
              window.scrollTo(0, 0);
            }}
          >
            <img src={logo} alt="logo" id="logoCoeur" />
            <img src={logotxt} alt="babyplace" id="logotxt" />
          </div>
          <p className="footerAddressLite">
            DaveWarehouse Society, 4 rue Baron 44100 NANTES
          </p>
          <p className="footerMailLite">
            info@davewarehouse.projet - 02.40.01.02.03
          </p>
        </div>
        <div className="footerCenterLite">
          <ul>
            <li>
              <HashLink smooth to="/features#about">
                A propos{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/features#profil">
                Nos Profils{" "}
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/features#mentions">
                Mentions Légales{" "}
              </HashLink>
            </li>
          </ul>

          <ul>
            <li>
              <HashLink smooth to="/contact#aide">
                Aide
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/contact#contact">
                Contact
              </HashLink>
            </li>
            <li>
              <HashLink smooth to="/faq#faq">
                FAQ
              </HashLink>
            </li>
          </ul>
        </div>
        <div className="footerRightLite">
          <div className="socialsLite">
            <a href="https://fr-fr.facebook.com" target="_blank" rel="noopener noreferrer">
              <BsFacebook id="iconFooter" />
            </a>
            <a href="https://twitter.com/?lang=fr" target="_blank" rel="noopener noreferrer">
              <BsTwitter id="iconFooter" />
            </a>
            <a href="https://www.instagram.com/?hl=fr" target="_blank" rel="noopener noreferrer">
              <AiFillInstagram id="iconFooter2" />
            </a>
          </div>
        </div>
      </div>
      <div className="footerBottomLite">
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
          <FaChevronUp id="chevronUp" />
        </button>
      </div>
    </div>
  );
}

export default FooterLite;
