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

const FooterLite = () => {
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
                        <li><HashLink smooth to={'/features#about'}>A propos </HashLink></li>
                        <li><HashLink smooth to={"/features#profil"} >Nos Profils </HashLink></li>
                        <li><HashLink smooth to={"/features#technics"} >Caractéristiques </HashLink></li>
                    </ul>

                    <ul>
                        <li><HashLink smooth to={"/contact#aide"}>Aide</HashLink></li>
                        <li><HashLink smooth to={"/contact#contact"}>Contact</HashLink></li>
                        <li><NavLink to="/faq">FAQ</NavLink></li>

                    </ul>
                </div>
                <div className="footerRightLite">
                    <div className="socialsLite">
                        <img src={facebook} alt="facebook" />
                        <img src={twitter} alt="twitter" />
                        <img src={insta} alt="instagram" />
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
                    <img src={up} alt="M" />
                </button>
            </div>

        </div>

    );
};

export default FooterLite;