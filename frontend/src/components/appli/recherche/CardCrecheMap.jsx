import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function CardCrecheMap({
  data,
  familleLiked,
  familleId,
  setChangeLike,
  changeLike,
}) {
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
    for (let i = 0; i < familleLiked.length; i++) {
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
      console.log(structureId, familleId);
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
    setChangeLike(!changeLike);
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
      {thisLiked ? (
        <AiFillHeart className="like" onClick={() => handleLikeCard()} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => handleLikeCard()} />
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
