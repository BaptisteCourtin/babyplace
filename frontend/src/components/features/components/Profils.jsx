import React from 'react';
import { RiGithubLine } from "react-icons/ri";
import { TiSocialLinkedin } from "react-icons/ti";
import Gui from "@assets/features/Gui.png";
import Amelie from "@assets/features/Amelie.png";
import Baptiste from "@assets/features/Baptiste.png";
import Thibaud from "@assets/features/Thibaud.png";

const Profils = () => {
    const dataProfil = [
        {
            nom: "Amélie",
            avatar: Amelie,
            github: "https://github.com/AmelieGHP",
            linkedin: "https://www.linkedin.com/in/amelie-ghp/"
        },
        {
            nom: "Baptiste",
            avatar: Baptiste,
            github: "https://github.com/BaptisteCourtin",
            linkedin: "https://www.linkedin.com/in/baptistecourtin/"
        },
        {
            nom: "Guillaume",
            avatar: Gui,
            github: "https://github.com/GuiPich",
            linkedin: "https://www.linkedin.com/in/guillaume-pichaud-627b308a/"
        },
        {
            nom: "Thibaud",
            avatar: Thibaud,
            github: "https://github.com/thibaudbrault",
            linkedin: "https://www.linkedin.com/in/thibaud-brault/"
        },
    ];

    return (
        <section id="profil">
            <h3>Nos Profils</h3>
            <p>Notre équipe de développeurs ayant participé à ce projet.</p>
            <div className="divdiv">
                <div className="imgAboutUsContainer">
                    <ul>
                        {dataProfil && dataProfil.map((element) => (
                            <li>
                                <img src={element.avatar} alt={element.nom} />
                                <div className="rightPart">
                                    <p>{element.nom}</p>
                                    <div className="links">
                                        <a
                                            href={element.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <RiGithubLine />
                                        </a>
                                        <a
                                            href={element.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <TiSocialLinkedin />
                                        </a>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};


export default Profils;