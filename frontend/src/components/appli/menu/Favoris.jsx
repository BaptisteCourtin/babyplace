import React, { useState, useEffect } from "react";
import axios from "axios";
import imgCreche from "@assets/img-time.svg";
import CardFavoris from "@components/appli/menu/CardFavoris";
import PropTypes from "prop-types";
import Toggle from "../filtres/Toggle";

function Favoris({ setCompo, familleId }) {
  // --- likes des familles ---
  const [familleLiked, setFamilleLiked] = useState();

  const getFamilleLiked = () => {
    axios
      .get(
        `${import.meta.env.VITE_PATH}/famille/likesAndStructure/${familleId}`
      )
      .then((res) => {
        setFamilleLiked(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  useEffect(() => {
    getFamilleLiked();
  }, [familleId]);

  const [occasions, setOccasions] = useState(false);
  return (
    familleLiked && (
      <>
        <div className="button-top">
          <button
            className="butt big"
            type="button"
            onClick={() => setCompo(0)}
          >
            {`< Favoris`}
          </button>
        </div>

        <main className="favoris">
          <div className="occas">
            <h4>Ne manquez plus les occasions</h4>
            <Toggle
              setter={setOccasions}
              state={occasions}
              nom="occasions"
              p="Je souhaite obtenir des notifications en cas de disponibilités des structures favorites"
              classique
            />
          </div>
          {familleLiked.map((each, index) => (
            <CardFavoris
              each={each}
              key={index}
              getFamilleLiked={getFamilleLiked}
              familleId={familleId}
            />
          ))}
        </main>
      </>
    )
  );
}

Favoris.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default Favoris;
