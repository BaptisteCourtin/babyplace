import React from "react";
import logoBlanc from "@assets/logo-blanc.svg";
import { AiOutlineUser } from "react-icons/ai";
import PropTypes from "prop-types";

function NotifAcceptee({ setCompo, photoFamille, oneReservation }) {
  // prendre l'image creche

  console.log(oneReservation);

  return (
    <div className="notif-container-grad">
      <div className="notif-accepte">
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
          )}{" "}
        </div>

        <div className="text">
          <h3 className="green">Fantastique !</h3>

          <p>
            {oneReservation.crecheNom
              ? oneReservation.crecheNom
              : oneReservation.assMatNomUsage
              ? `${oneReservation.assMatPrenom} ${oneReservation.assMatNomUsage}`
              : `${oneReservation.assMatPrenom} ${oneReservation.assMatNomNaissance}`}{" "}
            confirme accueillir {oneReservation.prenom} {oneReservation.nom} le{" "}
            {oneReservation.dateArrivee} de {oneReservation.heureArrivee} à{" "}
            {oneReservation.heureDepart}
          </p>
        </div>
        <div className="button-bas">
          <button type="button" className="butt" onClick={() => setCompo(4)}>
            Payer et Confirmer
          </button>
        </div>
      </div>
    </div>
  );
}

NotifAcceptee.propTypes = {
  setCompo: PropTypes.func.isRequired,
  photoFamille: PropTypes.string.isRequired,
};

export default NotifAcceptee;
