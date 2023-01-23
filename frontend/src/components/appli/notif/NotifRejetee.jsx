import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import logoBlanc from "@assets/logo-blanc.svg";
import { AiOutlineUser } from "react-icons/ai";

function NotifRejetee({ setCompo, photoFamille, oneReservation }) {
  // prendre l'image creche
  return (
    <div className="notif-container-grad">
      <div className="notif-rejet">
        <div className="button-top">
          <button
            className="butt big"
            type="button"
            onClick={() => setCompo(0)}
          >
            {`< Retour`}
          </button>
        </div>
        <img src={logoBlanc} alt="logo-blanc" className="logo" />
        <div className="avatars">
          {photoFamille ? (
            <img src={photoFamille} alt="avatar" className="avatar" />
          ) : (
            <AiOutlineUser className="avatar" />
          )}
          {oneReservation.photoProfil ? (
            <img
              src={oneReservation.photoProfil}
              alt="avatar"
              className="avatar"
            />
          ) : (
            <AiOutlineUser className="avatar" />
          )}
        </div>
        <div className="text">
          <h3 className="red">Dommage !</h3>
          <h4>
            Votre réservation à{" "}
            {oneReservation.crecheNom
              ? oneReservation.crecheNom
              : oneReservation.assMatNomUsage
              ? `${oneReservation.assMatPrenom} ${oneReservation.assMatNomUsage}`
              : ` ${oneReservation.assMatPrenom} ${oneReservation.assMatNomNaissance}`}{" "}
            pour {oneReservation.prenom} {oneReservation.nom} le{" "}
            {oneReservation.dateArrivee} de {oneReservation.heureArrivee} à{" "}
            {oneReservation.heureDepart} est refusée
          </h4>

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

NotifRejetee.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photoFamille: PropTypes.string.isRequired,
};

export default NotifRejetee;
