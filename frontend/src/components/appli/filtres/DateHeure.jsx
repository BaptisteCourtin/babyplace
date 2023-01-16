import React from "react";
import PropTypes from "prop-types";
import AppliDashPlaces from "./AppliPlaces";

function DateHeure({ setCompo, dataDateHeure, setDataDateHeure }) {
  return (
    <div className="filtres">
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(3)}
        >{`< Dates et Heures`}</button>
      </header>

      <main className="date-heure">
        <AppliDashPlaces
          dataDateHeure={dataDateHeure}
          setDataDateHeure={setDataDateHeure}
        />
      </main>
    </div>
  );
}

DateHeure.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default DateHeure;
