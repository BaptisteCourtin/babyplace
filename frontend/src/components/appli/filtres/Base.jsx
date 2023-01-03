import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function Base({ setCompo, filtres }) {
  return (
    <>
      <header>
        <button type="button" className="h2">
          <Link to="/appli/search">{`< Filtres`}</Link>
        </button>
        <button type="button">RESET</button>
      </header>

      <main className="base">
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(1)}
        >{`Filtres Basiques >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(2)}
        >{`Dates et Heures >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(3)}
        >{`Services >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(4)}
        >{`Aggréments >`}</button>
        <button
          type="button"
          className="h3"
          onClick={() => setCompo(5)}
        >{`Adresse >`}</button>
      </main>

      <button type="button" className="apply">
        <Link to="/appli/search" state={{ filtres }}>
          Retour à la recherche
        </Link>
      </button>
    </>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Base;
