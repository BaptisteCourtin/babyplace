import React from "react";
import { Link } from "react-router-dom";

import logoBlanc from "@assets/logo-blanc.svg";
import avatar1 from "@assets/avatar1.svg";

function NotifRejetee() {
  return (
    <div className="notif-container-grad">
      <div className="notif-rejet">
        <img src={logoBlanc} alt="logo-blanc" className="logo" />
        <div className="avatars">
          <img src={avatar1} alt="img profil" className="avatar" />
          <img src={avatar1} alt="img creche" className="avatar" />
        </div>
        <div className="text">
          <h3 className="red">Dommage !</h3>
          <h4>Votre réservation est refusée</h4>
          <p>
            N’oubliez pas de compléter votre profil pour avoir plus de chance
            que votre demande soit acceptée la prochaine fois
          </p>
        </div>
        <div className="button-bas">
          <Link to="/appli/search">
            <button type="button" className="butt">
              Voir d’autres professionnel.les disponibles
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotifRejetee;
