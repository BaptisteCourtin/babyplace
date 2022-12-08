import React, { useState } from "react";
import Toggle from "./Toggle";

function FilterSimple() {
  const [creche, setCreche] = useState(false);
  const [assistance, setAssistance] = useState(false);
  const [dispo, setDispo] = useState(false);
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
