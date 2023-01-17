import React, { useState, useEffect } from "react";
import axios from "axios";
import BaseCard from "@components/appli/recherche/BaseCard";
import BaseMap from "@components/appli/recherche/BaseMap";

// ---
import Base from "@components/appli/filtres/Base";
import FilterSimple from "@components/appli/filtres/FilterSimple";
import DateHeure from "@components/appli/filtres/DateHeure";
import Services from "@components/appli/filtres/Services";
import Aggrements from "@components/appli/filtres/Aggrements";

function AppliSearch() {
  const [compo, setCompo] = useState(0);

  // --- les structures ---
  const [structure, setStructure] = useState([]);
  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getStructure = () => {
    axios
      .get("http://localhost:5000/structure/allapp", {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setStructure(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getStructure();
  }, []);

  // --- les filtres ---
  const [dataBasique, setDataBasique] = useState({
    isCreche: 2,
    dispo: false,
  });

  const [dataDateHeure, setDataDateHeure] = useState({
    heureMin: "00:00",
    heureMax: "23:59",
    jour: "",
  });

  const [dataServices, setDataServices] = useState({
    pcsc1: false,
    handi: false,
    bilingue: false,
    jardin: false,
    animaux: false,
    nonFumeur: false,
    zeroPollution: false,
    hygiene: false,
    repas: false,
  });

  const [dataAggrements, setDataAggrements] = useState({
    handi: false,
    mois: false,
    nuit: false,
  });

  // ---

  const choixComposant = () => {
    if (compo === 2) {
      return (
        <BaseMap
          setCompo={setCompo}
          Allstructure={structure}
          dataBasique={dataBasique}
          dataDateHeure={dataDateHeure}
          dataServices={dataServices}
          dataAggrements={dataAggrements}
        />
      );
    }
    if (compo === 3) {
      return <Base setCompo={setCompo} />;
    }
    if (compo === 4) {
      return (
        <FilterSimple
          setCompo={setCompo}
          dataBasique={dataBasique}
          setDataBasique={setDataBasique}
        />
      );
    }
    if (compo === 5) {
      return (
        <DateHeure
          setCompo={setCompo}
          dataDateHeure={dataDateHeure}
          setDataDateHeure={setDataDateHeure}
        />
      );
    }
    if (compo === 6) {
      return (
        <Services
          setCompo={setCompo}
          dataServices={dataServices}
          setDataServices={setDataServices}
        />
      );
    }
    if (compo === 7) {
      return (
        <Aggrements
          setCompo={setCompo}
          dataAggrements={dataAggrements}
          setDataAggrements={setDataAggrements}
        />
      );
    }
    return (
      <BaseCard
        setCompo={setCompo}
        Allstructure={structure}
        dataBasique={dataBasique}
        dataDateHeure={dataDateHeure}
        dataServices={dataServices}
        dataAggrements={dataAggrements}
      />
    );
  };

  return <div className="applisearch">{choixComposant()}</div>;
}

export default AppliSearch;
