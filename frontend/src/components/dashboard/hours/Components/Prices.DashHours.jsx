import React from "react";
import PropTypes from "prop-types";

function PricesDashHours({
  userType,
  updateTarif,
  hour1,
  setHour1,
  hour2,
  setHour2,
  hour3,
  setHour3,
}) {
  return (
    <details>
      <summary>Vos tarifs</summary>
      <div className="dashPlacesPrices">
        <div className="dashOptionsPrices">
          <p>Heure</p>
          <input
            type="number"
            name="tarifHeureSup"
            id="tarifHeureSup"
            value={hour1}
            step={0.5}
            onChange={(e) => {
              setHour1(e.target.value);
              updateTarif("tarifHeure", e.target.value);
            }}
          />
          €
        </div>
        <div className="dashOptionsPrices">
          <p title="Entre 22h et 6h, dimanches et jours fériés">
            Heure spécifique
          </p>
          <input
            type="number"
            name="tarifHeureSup"
            id="tarifHeureSup"
            value={hour2}
            step={0.5}
            onChange={(e) => {
              setHour2(e.target.value);
              updateTarif("tarifHoraireSpec", e.target.value);
            }}
          />
          €
        </div>
        {userType === "assMat" && (
          <div className="dashOptionsPrices">
            <p title="Au delà de 45h/semaine">Heure majorée</p>
            <input
              type="number"
              name="tarifHeureSup"
              id="tarifHeureSup"
              value={hour3}
              step={0.5}
              onChange={(e) => {
                setHour3(e.target.value);
                updateTarif("tarifHeureSup", e.target.value);
              }}
            />
            €
          </div>
        )}
      </div>
    </details>
  );
}

PricesDashHours.propTypes = {
  userType: PropTypes.string.isRequired,
  updateTarif: PropTypes.func.isRequired,
  hour1: PropTypes.number,
  setHour1: PropTypes.func.isRequired,
  hour2: PropTypes.number,
  setHour2: PropTypes.func.isRequired,
  hour3: PropTypes.number,
  setHour3: PropTypes.func.isRequired,
};

export default PricesDashHours;
