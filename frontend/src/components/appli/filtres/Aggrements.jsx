import React from "react";
import PropTypes from "prop-types";
import Toggle from "./Toggle";

// voir la page AppliSearch
// les filtres sont directement appliqués
function Aggrements({ setCompo, dataAggrements, setDataAggrements }) {
  return (
    <div className="filtres">
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(3)}
        >{`< Agréments`}</button>
      </header>

      <main className="aggrements">
        {/* mettre le nom comme le state */}
        <Toggle
          setter={setDataAggrements}
          state={dataAggrements.handi}
          nom="handi"
          p="Enfant handicapé"
        />
        <Toggle
          setter={setDataAggrements}
          state={dataAggrements.mois}
          nom="mois"
          p="Enfant de moins de 18 mois"
        />
        <Toggle
          setter={setDataAggrements}
          state={dataAggrements.nuit}
          nom="nuit"
          p="Accueil de nuit"
        />
      </main>
      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Retour à la recherche
      </button>
    </div>
  );
}

Aggrements.propTypes = {
  setCompo: PropTypes.func.isRequired,
  dataAggrements: PropTypes.object.isRequired,
  setDataAggrements: PropTypes.func.isRequired,
};

export default Aggrements;
