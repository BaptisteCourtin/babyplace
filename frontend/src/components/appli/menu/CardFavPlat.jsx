import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { AiFillCloseCircle, AiFillStar } from "react-icons/ai";

// utilisé dans la messagerie
function CardFavPlat({ each }) {
  const {
    nom,
    photoProfil,
    avisCom,
    avisProprete,
    avisSecurite,
    avisEveil,
    avisHoraires,
  } = each;

  const [nbStarMoyen, setNbStarMoyen] = useState(0.5);

  const staring = () => {
    setNbStarMoyen(
      (
        (avisCom + avisProprete + avisSecurite + avisEveil + avisHoraires) /
        5
      ).toFixed(1)
    );
  };

  useEffect(() => {
    staring();
  }, []);

  return (
    <div className="card-fav-plat">
      <img src={photoProfil} alt="img" />
      <div className="texte">
        <h4>{nom}</h4>
      </div>
      {avisCom ? (
        <p className="note">
          {nbStarMoyen} <AiFillStar />
        </p>
      ) : null}
      <button id="card-fav-plat-closeIcon" type="button">
        <AiFillCloseCircle style={{ color: "red" }} />
      </button>
    </div>
  );
}

CardFavPlat.propTypes = {
  each: PropTypes.object.isRequired,
};

export default CardFavPlat;
