import React, { useState } from "react";
import Toggle from "./Toggle";

function Aggrements() {
  const [handicape, setHandicape] = useState(false);
  const [mois, setMois] = useState(false);
  const [nuit, setNuit] = useState(false);

  return (
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
  );
}

export default Aggrements;
