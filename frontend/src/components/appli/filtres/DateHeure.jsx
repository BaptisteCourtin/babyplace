import React from "react";
import AppliDashPlaces from "./AppliPlaces";

function DateHeure({ setCompo }) {
  return (
    <>
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(0)}
        >{`< Dates et Heures`}</button>
        <button type="button">RESET</button>
      </header>

      <main className="date-heure">
        <AppliDashPlaces />
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </>
  );
}

export default DateHeure;
