import React from "react";
import PropTypes from "prop-types";

function CardResaPlat({ each }) {
  return (
    <div className="card-resa-plat">
      {each.photoProfil ? (
        <img src={each.photoProfil} alt="avatar" className="avatar" />
      ) : (
        <AiOutlineUser className="avatar" />
      )}

      <p>
        Vous avez un rendez-vous avec{" "}
        {each.crecheNom
          ? each.crecheNom
          : each.assMatNomUsage
          ? `${each.assMatPrenom} ${each.assMatNomUsage}`
          : ` ${each.assMatPrenom} ${each.assMatNomNaissance}`}{" "}
        le <span>{each.dateArrivee}</span> de {each.heureArrivee} à{" "}
        {each.heureDepart} pour {each.prenom} {each.nom}
      </p>
    </div>
  );
}

CardResaPlat.propTypes = {
  each: PropTypes.object.isRequired,
};

export default CardResaPlat;
