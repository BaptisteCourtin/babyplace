import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "@components/appli/filtres/Base";
import FilterSimple from "@components/appli/filtres/FilterSimple";
import DateHeure from "@components/appli/filtres/DateHeure";
import Services from "@components/appli/filtres/Services";
import Aggrements from "@components/appli/filtres/Aggrements";
import Adresse from "@components/appli/filtres/Adresse";

function Filtres() {
  const [filtres, setFiltres] = useState([]);
  console.log(`filtres :${filtres}`);

  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <FilterSimple setFiltres={setFiltres} filtres={filtres} />;
    }
    if (compo === 2) {
      return <DateHeure />;
    }
    if (compo === 3) {
      return <Services />;
    }
    if (compo === 4) {
      return <Aggrements />;
    }
    if (compo === 5) {
      return <Adresse />;
    }
    return <Base setCompo={setCompo} />;
  };

  return (
    <div className="filtres" filtres={filtres}>
      <header>
        <button
          type="button"
          className="h2"
          onClick={() => setCompo(0)}
        >{`< Filtres`}</button>
        <button type="button">RESET</button>
      </header>

      {choixComposant()}

      <button type="button" className="apply">
        <Link to="/appli/search" state={{ filtres }}>
          Appliquer
        </Link>
      </button>
    </div>
  );
}

export default Filtres;
