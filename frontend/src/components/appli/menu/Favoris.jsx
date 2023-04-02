import React, { useState, useEffect } from "react";
import axios from "axios";
import CardFavoris from "@components/appli/menu/CardFavoris";
import PropTypes from "prop-types";
import Toggle from "../filtres/Toggle";

function Favoris({ setCompo, familleId }) {
  // --- get likes des familles ---
  const [suppLiked, setSuppLiked] = useState(true);
  const [familleLiked, setFamilleLiked] = useState();

  const getFamilleLiked = (source) => {
    axios
      .get(
        `${import.meta.env.VITE_PATH}/famille/likesAndStructure/${familleId}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setFamilleLiked(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };
  useEffect(() => {
    const source = axios.CancelToken.source();
    getFamilleLiked(source);
    return () => {
      source.cancel();
    };
  }, [familleId, suppLiked]);

  // --- un toggle qui sert à rien ---
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
              setSuppLiked={setSuppLiked}
              suppLiked={suppLiked}
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
  familleId: PropTypes.string.isRequired,
};

export default Favoris;
