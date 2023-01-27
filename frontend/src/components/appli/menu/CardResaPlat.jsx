import React from "react";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";

function CardResaPlat({ each }) {
  const {
    crecheNom,
    assMatNomUsage,
    assMatPrenom,
    assMatNomNaissance,
    jour,
    dateArrivee,
    dateDepart,
    heureArrivee,
    heureDepart,
    prenom,
    nom,
    photoProfil,
  } = each;

  return (
    <div className="card-resa-plat">
      {photoProfil ? (
        <img src={photoProfil} alt="avatar" className="avatar" />
      ) : (
        <AiOutlineUser className="avatar" />
      )}

      <p>
        Vous avez un rendez-vous avec{" "}
        {crecheNom ||
          (assMatNomUsage
            ? `${assMatPrenom} ${assMatNomUsage}`
            : ` ${assMatPrenom} ${assMatNomNaissance}`)}{" "}
        le{" "}
        <span>
          {jour} {dateArrivee && `du ${dateArrivee} au ${dateDepart}`}
        </span>
        de {heureArrivee} à {heureDepart} pour {prenom} {nom}
      </p>
    </div>
  );
}

CardResaPlat.propTypes = {
  each: PropTypes.object.isRequired,
};

export default CardResaPlat;
