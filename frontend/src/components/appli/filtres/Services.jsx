import React from "react";
import PropTypes from "prop-types";
import Check from "./Check";

function Services({ setCompo, setDataServices, dataServices }) {
  return (
    <div className="filtres">
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(3)}
        >{`< Services`}</button>
      </header>

      <main className="services">
        <h4>Expérience et Formations</h4>
        {/* mettre le nom comme le state */}
        <Check
          setter={setDataServices}
          state={dataServices.pcsc1}
          nom="pcsc1"
          p="Formation premier secours (PCSC1)"
        />
        <Check
          setter={setDataServices}
          state={dataServices.handi}
          nom="handi"
          p="Formation accueil d'enfant handicapés"
        />
        <Check
          setter={setDataServices}
          state={dataServices.bilingue}
          nom="bilingue"
          p="Bilingue / internationale"
        />

        <h4>Sorties</h4>
        <Check
          setter={setDataServices}
          state={dataServices.jardin}
          nom="jardin"
          p="Espaces extérieur / jardin"
        />

        <h4>Environnement</h4>
        <Check
          setter={setDataServices}
          state={dataServices.animaux}
          nom="animaux"
          p="Animaux domestiques"
        />
        <Check
          setter={setDataServices}
          state={dataServices.nonFumeur}
          nom="nonFumeur"
          p="Non-fumeur"
        />
        <Check
          setter={setDataServices}
          state={dataServices.zeroPollution}
          nom="zeroPollution"
          p="0% pollution intérieure"
        />
        <h4>Equipements fournis</h4>
        <Check
          setter={setDataServices}
          state={dataServices.hygiene}
          nom="hygiene"
          p="Changes et couches"
        />
        <Check
          setter={setDataServices}
          state={dataServices.repas}
          nom="repas"
          p="Repas / Laits"
        />
      </main>
      <button type="button" className="apply" onClick={() => setCompo(0)}>
        Retour à la recherche
      </button>
    </div>
  );
}

Services.propTypes = {
  setCompo: PropTypes.func.isRequired,
  dataServices: PropTypes.object.isRequired,
  setDataServices: PropTypes.func.isRequired,
};

export default Services;
