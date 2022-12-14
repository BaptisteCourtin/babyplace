import React, { useState, useEffect } from "react";
import Toggle from "./Toggle";

function FilterSimple({ setFiltres, filtres }) {
  const [creche, setCreche] = useState(false);
  const [assistance, setAssistance] = useState(false);
  const [dispo, setDispo] = useState(false);

  useEffect(() => {
    if (creche && !filtres.includes("creche")) {
      setFiltres((oldArray) => [...oldArray, "creche"]);
    } else if (!creche) {
      setFiltres((prev) => prev.filter((each) => each !== "creche"));
    }

    if (assistance && !filtres.includes("assistance")) {
      setFiltres((oldArray) => [...oldArray, "assistance"]);
    } else if (!assistance) {
      setFiltres((prev) => prev.filter((each) => each !== "assistance"));
    }

    if (dispo && !filtres.includes("dispo")) {
      setFiltres((oldArray) => [...oldArray, "dispo"]);
    } else if (!dispo) {
      setFiltres((prev) => prev.filter((each) => each !== "dispo"));
    }
  }, [creche, assistance, dispo]);

  return (
    <main className="filter-simple">
      <Toggle setter={setCreche} state={creche} nom="creche" p="Crèche" />
      <Toggle
        setter={setAssistance}
        state={assistance}
        nom="assisstance"
        p="Assisstant maternel"
      />
      <Toggle
        setter={setDispo}
        state={dispo}
        nom="dispo"
        p="Que les profils dispo"
      />
    </main>
  );
}

export default FilterSimple;
