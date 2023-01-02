import React, { useState } from "react";
import Base from "@components/appli/filtres/Base";
import FilterSimple from "@components/appli/filtres/FilterSimple";
import DateHeure from "@components/appli/filtres/DateHeure";
import Services from "@components/appli/filtres/Services";
import Aggrements from "@components/appli/filtres/Aggrements";
import Adresse from "@components/appli/filtres/Adresse";

function Filtres() {
  const [filtres, setFiltres] = useState([]);
  const [compo, setCompo] = useState(0);

  const choixComposant = () => {
    if (compo === 1) {
      return (
        <FilterSimple
          setFiltres={setFiltres}
          filtres={filtres}
          setCompo={setCompo}
        />
      );
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
    return <Base filtres={filtres} setCompo={setCompo} />;
  };

  return (
    <div className="filtres" filtres={filtres}>
      {choixComposant()}
    </div>
  );
}

export default Filtres;
