import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function CardCrecheMap({ data, familleLiked, familleId, getFamilleLiked }) {
  const {
    photoStructure1,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
    tarifHeure,
  } = data;

  // --- like or not ---
  const [thisLikedIndex, setThisLikedIndex] = useState();
  const [thisLiked, setThisLiked] = useState(false);

  const likeOrNot = () => {
    for (let i = 0; i < familleLiked.length; i += 1) {
      if (familleLiked[i].structureIdLiked === structureId) {
        setThisLikedIndex(i);
        setThisLiked(true);
        break;
      }
    }
  };
  useEffect(() => {
    likeOrNot();
  }, [familleLiked]);

  const handleLikeCard = () => {
    if (
      familleLiked[thisLikedIndex] &&
      familleLiked[thisLikedIndex].structureIdLiked === structureId
    ) {
      axios
        .delete(
          `${
            import.meta.env.VITE_PATH
          }/famille/deleteLike/?familleId=${familleId}&structureId=${structureId}`,
          [familleId, structureId]
        )
        .catch((err) => {
          console.error(err);
        });
      setThisLiked(false);
    } else {
      axios
        .post(`${import.meta.env.VITE_PATH}/famille/oneMoreLike`, {
          structureId,
          familleId,
        })
        .catch((err) => {
          console.error(err);
        });
      setThisLiked(true);
    }
    getFamilleLiked();
  };

  // ---
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
      {familleId ? (
        thisLiked ? (
          <AiFillHeart className="like" onClick={() => handleLikeCard()} />
        ) : (
          <AiOutlineHeart className="like" onClick={() => handleLikeCard()} />
        )
      ) : null}

      <Link to="/appli/search/card" state={{ data, dataHorairesId, familleId }}>
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
  familleLiked: PropTypes.array.isRequired,
  familleId: PropTypes.number,
  getFamilleLiked: PropTypes.func.isRequired,
};

export default CardCrecheMap;
