import React, { useState, useEffect } from "react";
import axios from "axios";

import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import BlocStar from "./BlocStar";

function Star() {
  const [visibleStar, setVisibleStar] = useState(false);
  const [nbStarMoyen, setNbStarMoyen] = useState(0);

  const [data, setData] = useState({});
  const tabStar = [
    { nom: "Communication", nbStar: data.Avis_com },
    { nom: "Propreté", nbStar: data.Avis_proprete },
    { nom: "Sécurité", nbStar: data.Avis_securite },
    { nom: "Eveil de l'enfant", nbStar: data.Avis_eveil },
    { nom: "Souplesse des horaires", nbStar: data.Avis_horaires },
  ];

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  // donne les étoiles de chaque
  const getData = () => {
    axios
      .get("http://localhost:5000/structure", {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setData(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

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
  }, [
    data.Avis_com,
    data.Avis_proprete,
    data.Avis_securite,
    data.Avis_eveil,
    data.Avis_horaires,
  ]);

  return (
    <button
      type="button"
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
    </button>
  );
}

export default Star;
