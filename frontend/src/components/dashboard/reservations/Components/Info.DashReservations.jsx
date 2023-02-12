import React from "react";
import PropTypes from "prop-types";

function InfoDashReservations({ r, tarifHeure }) {
  function calcAge(dateString) {
    const birthday = +new Date(dateString);
    return ~~((Date.now() - birthday) / (31557600000 / 12));
  }

  return (
    <>
      <div className="reserInfo1">
        <p>
          {r.prenom} <br /> {r.nom}
        </p>
        <p>{calcAge(r.dateNaissance)} mois</p>
      </div>
      <div className="reserInfo2">
        <p>
          <span>Jour</span>
          <br />
          {r.jour}
        </p>
        <p>
          <span>Horaires</span>
          <br />
          {r.heureArrivee} / {r.heureDepart}
        </p>
      </div>
      <div className="reserInfo3">
        <p>{~~r.heureTotal.split(":")[0] + 1}H</p>
        <p>{((~~r.heureTotal.split(":")[0] + 1) * tarifHeure)?.toFixed(0)}€</p>
      </div>
    </>
  );
}

InfoDashReservations.propTypes = {
  r: PropTypes.object.isRequired,
  tarifHeure: PropTypes.number.isRequired,
};

export default InfoDashReservations;
