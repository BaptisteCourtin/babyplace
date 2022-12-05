import React, { useState } from "react";
import BlocStar from "./BlocStar";

const tabStar = [
  { nom: "Communication", nbStar: 5 },
  { nom: "Propreté", nbStar: 3.5 },
  { nom: "Sécurité", nbStar: 2 },
  { nom: "Eveil de l'enfant", nbStar: 3 },
  { nom: "Souplesse des horaires", nbStar: 4 },
];

function Star() {
  const [visibleStar, setVisibleStar] = useState(false);

  return (
    <div className="star" onClick={() => setVisibleStar(!visibleStar)}>
      4.5 star
      {visibleStar ? (
        <div className="container-etoile">
          <div>Avis (256)</div>
          {tabStar.map((each) => (
            <BlocStar nom={each.nom} nbStar={each.nbStar} />
          ))}
        </div>
      ) : null}
    </div>
  );
}

export default Star;
