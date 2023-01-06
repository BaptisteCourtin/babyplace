import React from "react";
import PropTypes from "prop-types";
import AppliDashPlaces from "./AppliPlaces";

function DateHeure({ setCompo }) {
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
        <AppliDashPlaces />
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </div>
  );
}

DateHeure.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default DateHeure;
