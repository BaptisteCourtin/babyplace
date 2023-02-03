import React from 'react';
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import Gui from "@assets/features/Gui.png";
import Amelie from "@assets/features/Amelie.png";
import Baptiste from "@assets/features/Baptiste.png";
import Thibaud from "@assets/features/Thibaud.png";

const Profils = () => {
    return (
        <div className="profils">

            <h3>Nos Profils</h3>
            <p>Notre équipe de développeurs ayant participé à ce projet.</p>
            <div>
                <div className="imgAboutUsContainer">
                    <ul>
                        <li>
                            <img src={Amelie} alt="Amélie" />
                            <div className="rightPart">
                                <p>Amélie</p>
                                <div className="links">
                                    <a
                                        href="https://github.com/AmelieGHP"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiGithubLine />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/amelie-ghp/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TiSocialLinkedin />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={Baptiste} alt="Baptiste" />
                            <div className="rightPart">
                                <p>Baptiste</p>
                                <div className="links">
                                    <a
                                        href="https://github.com/BaptisteCourtin"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiGithubLine />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/baptistecourtin/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TiSocialLinkedin />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={Gui} alt="Guillaume" />
                            <div className="rightPart">
                                <p>Guillaume</p>
                                <div className="links">
                                    <a
                                        href="https://github.com/GuiPich"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiGithubLine />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/guillaume-pichaud-627b308a/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TiSocialLinkedin />
                                    </a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <img src={Thibaud} alt="Thibaud" />
                            <div className="rightPart">
                                <p>Thibaud</p>
                                <div className="links">
                                    <a
                                        href="https://github.com/thibaudbrault"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <RiGithubLine />
                                    </a>
                                    <a
                                        href="https://www.linkedin.com/in/thibaud-brault/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <TiSocialLinkedin />
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Profils;