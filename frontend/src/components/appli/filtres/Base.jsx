import React from "react";
import PropTypes from "prop-types";

function Base({ setCompo }) {
  return (
    <main className="base">
      <h3 onClick={() => setCompo(1)}>{`Filtres Basiques >`}</h3>
      <h3 onClick={() => setCompo(2)}>{`Dates et Heures >`}</h3>
      <h3 onClick={() => setCompo(3)}>{`Services >`}</h3>
      <h3 onClick={() => setCompo(4)}>{`Aggréments >`}</h3>
      <h3 onClick={() => setCompo(5)}>{`Adresse >`}</h3>
    </main>
  );
}

Base.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Base;
