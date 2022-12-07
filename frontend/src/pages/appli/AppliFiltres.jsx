import React, { useState } from "react";
import { Link } from "react-router-dom";
import Base from "@components/appli/filtres/Base";
import FilterSimple from "@components/appli/filtres/FilterSimple";
import DateHeure from "@components/appli/filtres/DateHeure";
import Services from "@components/appli/filtres/Services";
import Aggrements from "@components/appli/filtres/Aggrements";
import Adresse from "@components/appli/filtres/Adresse";

function Filtres() {
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return <FilterSimple setCompo={setCompo} />;
    }
    if (compo === 2) {
      return <DateHeure setCompo={setCompo} />;
    }
    if (compo === 3) {
      return <Services setCompo={setCompo} />;
    }
    if (compo === 4) {
      return <Aggrements setCompo={setCompo} />;
    }
    if (compo === 5) {
      return <Adresse setCompo={setCompo} />;
    }
    return <Base setCompo={setCompo} />;
  };

  return (
    <div className="filtres">
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
        <Link to="/appli/search">Appliquer</Link>
      </button>
    </div>
  );
}

export default Filtres;
