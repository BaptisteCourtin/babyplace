import React from "react";
import imgWoman from "@assets/img-time.svg";
import logo from "@assets/logo4.svg";
import logotxt from "@assets/babyplaceTxt.svg";
import { Link, useNavigate } from "react-router-dom";

function WaitAdmin() {
  const navigate = useNavigate();

  return (
    <div className="pageWait">
      <div className="logoWait">
        <img src={logo} alt="Babyplace" id="logoCoeur" />
        <img src={logotxt} alt="Babyplace" id="logotxt" />
      </div>
      <div className="waitMessage">
        <h1>Compte en cours de validation</h1>

        <p className="boldText">
          La validation définitive de votre compte sera effective sous 48h
          (jours ouvrés).{" "}
        </p>
        <div className="inlineLink">
          <p>
            Si vous le souhaitez, vous pouvez modifier/compléter/vérifier vos
            informations en cliquant
            <Link to="/structure/inscription-form" className="boldText">
              ici{" "}
            </Link>
          </p>
        </div>
        <img src={imgWoman} alt="femme horloge" />
        <button type="button" onClick={() => navigate("/", {})}>
          Quitter
        </button>
      </div>
    </div>
  );
}

export default WaitAdmin;
