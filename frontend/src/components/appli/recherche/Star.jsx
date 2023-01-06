import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BlocStar from "./BlocStar";

function Star({ com, proprete, securite, eveil, horaires, nbNotes }) {
  const [visibleStar, setVisibleStar] = useState(false);
  const [nbStarMoyen, setNbStarMoyen] = useState(0);

  const tabStar = [
    { nom: "Communication", nbStar: com },
    { nom: "Propreté", nbStar: proprete },
    { nom: "Sécurité", nbStar: securite },
    { nom: "Eveil de l'enfant", nbStar: eveil },
    { nom: "Souplesse des horaires", nbStar: horaires },
  ];

  // donne les étoiles globales
  const staring = () => {
    let init = 0;
    for (let i = 0; i < tabStar.length; i += 1) {
      init += tabStar[i].nbStar;
    }
    init = (init / tabStar.length).toFixed(1);
    setNbStarMoyen(init);
  };
  useEffect(() => {
    staring();
  }, []);

  return (
    <button
      type="button"
      className={visibleStar ? "star visible" : "star"}
      onClick={() => setVisibleStar(!visibleStar)}
    >
      {visibleStar ? (
        <div className="container-etoile">
          <div className="bloc-star">
            Avis ({nbNotes})
            <Rating
              className="rating"
              emptySymbol={AiOutlineStar()}
              fullSymbol={AiFillStar()}
              initialRating={nbStarMoyen}
              readonly
            />
          </div>
          {tabStar.map((each, index) => (
            <BlocStar nom={each.nom} nbStar={each.nbStar} key={index} />
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
    </button>
  );
}

Star.propTypes = {
  com: PropTypes.number.isRequired,
  proprete: PropTypes.number.isRequired,
  securite: PropTypes.number.isRequired,
  eveil: PropTypes.number.isRequired,
  horaires: PropTypes.number.isRequired,
};

export default Star;
