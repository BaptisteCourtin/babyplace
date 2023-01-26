import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import BaseCard from "@components/appli/recherche/BaseCard";
import BaseMap from "@components/appli/recherche/BaseMap";
import FamilleContext from "@components/context/FamilleContext";

// ---
import Base from "@components/appli/filtres/Base";
import FilterSimple from "@components/appli/filtres/FilterSimple";
import DateHeure from "@components/appli/filtres/DateHeure";
import Services from "@components/appli/filtres/Services";
import Aggrements from "@components/appli/filtres/Aggrements";

function AppliSearch() {
  const { familleId } = useContext(FamilleContext);

  // --- les structures ---
  const [structure, setStructure] = useState([]);

  const getStructure = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/structure/allapp`)
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

  // --- likes des familles ---
  const [familleLiked, setFamilleLiked] = useState();

  const getFamilleLiked = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/famille/likes/${familleId}`)
      .then((res) => {
        setFamilleLiked(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getFamilleLiked();
  }, [familleId]);

  // --- les filtres ---
  const [dataBasique, setDataBasique] = useState({
    isCreche: 2,
  });

  const [dataDateHeure, setDataDateHeure] = useState({
    heureMin: "",
    heureMax: "",
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
  const [compo, setCompo] = useState(0);

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
          familleLiked={familleLiked}
          familleId={familleId}
          getFamilleLiked={getFamilleLiked}
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
        familleLiked={familleLiked}
        familleId={familleId}
        getFamilleLiked={getFamilleLiked}
      />
    );
  };

  return familleLiked && <div className="applisearch">{choixComposant()}</div>;
}

export default AppliSearch;
