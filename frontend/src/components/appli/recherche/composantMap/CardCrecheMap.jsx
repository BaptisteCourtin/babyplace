import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function CardCrecheMap({ data, familleLiked, familleId }) {
  const {
    photoStructure1,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
    tarifHeure,
  } = data;

  // --- si la carte est like or non ---
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

  // --- delete OU post un like sur la structure ---
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
  };

  // --- get les jours pour savoir si normalement travaillé ou non ---
  const [dataHorairesId, setDataHorairesId] = useState([]);
  const getHorairesId = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/horaires/${structureId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setDataHorairesId(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  // --- calcul le nombre d'étoile au global ---
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
    const source = axios.CancelToken.source();
    getHorairesId(source);
    staring();
    return () => {
      source.cancel();
    };
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
  familleId: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

export default CardCrecheMap;
