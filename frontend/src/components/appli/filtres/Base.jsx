import React from "react";
import PropTypes from "prop-types";

function Base({ setCompo }) {
  return (
    <div className="filtres">
      <header>
        <button type="button" className="h2" onClick={() => setCompo(0)}>
          {`< Filtres`}
        </button>
        <button type="button">RESET</button>
      </header>

      <main className="base">
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(4)}
        >{`Filtres Basiques >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(5)}
        >{`Dates et Heures >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(6)}
        >{`Services >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(7)}
        >{`Aggréments >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(8)}
        >{`Adresse >`}</button>
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Retour à la recherche
      </button>
    </div>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Base;
