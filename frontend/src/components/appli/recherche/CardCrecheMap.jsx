import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function CardCrecheMap({ data }) {
  const {
    photoStructure1,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
    tarifHeure,
  } = data;

  const [likeCard, setLikeCard] = useState(true);

  const [dataHorairesId, setDataHorairesId] = useState([]);
  const getHorairesId = () => {
    axios
      .get(`${import.meta.env.VITE_PATH}/horaires/${structureId}`)
      .then((res) => {
        setDataHorairesId(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // --- star ---

  const [nbStarMoyen, setNbStarMoyen] = useState(0);

  const staring = () => {
    setNbStarMoyen(
      (
        (data.avisCom +
          data.avisProprete +
          data.avisSecurite +
          data.avisEveil +
          data.avisHoraires) /
        5
      ).toFixed(1)
    );
  };

  useEffect(() => {
    getHorairesId();
    staring();
  }, []);

  return (
    <div className="card-creche-map">
      {likeCard ? (
        <AiFillHeart className="like" onClick={() => setLikeCard(false)} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => setLikeCard(true)} />
      )}

      <Link to="/appli/search/card" state={{ data, dataHorairesId }}>
        <div>
          <img src={photoStructure1} alt="img creche" />
          <p className="nom-structure">
            {nom ||
              (nomUsage
                ? `${prenom} ${nomUsage}`
                : `${prenom} ${nomNaissance}`)}
          </p>
          <div className="star-all">
            {nbStarMoyen}
            {AiFillStar()}
          </div>
          <p className="prix">{tarifHeure}€/heure</p>
        </div>
      </Link>
    </div>
  );
}

CardCrecheMap.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardCrecheMap;
