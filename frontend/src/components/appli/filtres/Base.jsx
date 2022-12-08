import React from "react";
import PropTypes from "prop-types";

function Base({ setCompo }) {
  return (
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
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Base;
