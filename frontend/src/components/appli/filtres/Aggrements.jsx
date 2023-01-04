import React, { useState } from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";

function Aggrements({ setCompo }) {
  const [handicape, setHandicape] = useState(false);
  const [mois, setMois] = useState(false);
  const [nuit, setNuit] = useState(false);

  return (
    <>
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(0)}
        >{`< Aggrements`}</button>
        <button type="button">RESET</button>
      </header>

      <main className="aggrements">
        <Toggle
          setter={setHandicape}
          state={handicape}
          nom="handicape"
          p="Enfant handicapé"
        />
        <Toggle
          setter={setMois}
          state={mois}
          nom="mois"
          p="Enfant de moins de 18 mois"
        />
        <Toggle setter={setNuit} state={nuit} nom="nuit" p="Accueil de nuit" />
      </main>

      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Appliquer
      </button>
    </>
  );
}

Aggrements.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Aggrements;
