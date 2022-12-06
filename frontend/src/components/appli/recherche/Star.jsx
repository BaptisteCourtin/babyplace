import React, { useState, useEffect } from "react";

import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BlocStar from "./BlocStar";

const tabStar = [
  { nom: "Communication", nbStar: 5 },
  { nom: "Propreté", nbStar: 3.3 },
  { nom: "Sécurité", nbStar: 2.6 },
  { nom: "Eveil de l'enfant", nbStar: 3.5 },
  { nom: "Souplesse des horaires", nbStar: 4.3 },
];

function Star() {
  const [visibleStar, setVisibleStar] = useState(false);
  const [nbStarMoyen, setNbStarMoyen] = useState(0);

  useEffect(() => {
    let init = 0;
    for (let i = 0; i < tabStar.length; i++) {
      init += tabStar[i].nbStar;
    }
    init = (init / tabStar.length).toFixed(1);
    setNbStarMoyen(init);
  }, []);

  return (
    <div
      className={visibleStar ? "star visible" : "star"}
      onClick={() => setVisibleStar(!visibleStar)}
    >
      {visibleStar ? (
        <div className="container-etoile">
          <div className="bloc-star">
            Avis (256)
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={nbStarMoyen}
              readonly
            />
          </div>
          {tabStar.map((each) => (
            <BlocStar nom={each.nom} nbStar={each.nbStar} />
          ))}
        </div>
      ) : (
        <div className="etoileDeBase">
          <p>
            <span>{nbStarMoyen}</span>
            <span>{AiFillStar()}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default Star;
