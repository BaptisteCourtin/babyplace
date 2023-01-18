import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

function CarteCreche({ data, userPosition }) {
  const {
    isCreche,
    photoStructure1,
    tarifHeure,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
    adresse,
  } = data;

  const [likeCard, setLikeCard] = useState(true);

  // les horaires de chaques jour suivant l'id de la structure
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

  const [center, setCenter] = useState([0, 0]);

  const handleDistance = () => {
    // api convertir adresse en position gps
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${adresse}`)
      .then((res) => {
        setCenter(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // --- calcul distance ---

  function toRadian(degree) {
    return (degree * Math.PI) / 180;
  }

  function getDistance(origin, destination) {
    // return distance in meters
    const lat1 = toRadian(origin[0]);
    const lon1 = toRadian(origin[1]);
    const lat2 = toRadian(destination[0]);
    const lon2 = toRadian(destination[1]);

    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    const a =
      Math.sin(deltaLat / 2) ** 2 +
      Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
    const c = 2 * Math.asin(Math.sqrt(a));
    const EARTH_RADIUS = 6371;
    return c * EARTH_RADIUS * 1000;
  }

  const distance = (getDistance(userPosition, center) / 1000).toFixed(2);

  // --- avis moyen ---

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

  // ---

  const blueBg = {
    background: "linear-gradient( #7f72f266, #7f72f2cc)",
  };

  const pinkBg = {
    background: "linear-gradient( #f063a766, #f063a7cc)",
  };

  useEffect(() => {
    getHorairesId();
    handleDistance();
    staring();
  }, []);

  return (
    dataHorairesId.length !== 0 && (
      <div className="carte-creche" style={isCreche ? blueBg : pinkBg}>
        {likeCard ? (
          <AiFillHeart className="like" onClick={() => setLikeCard(false)} />
        ) : (
          <AiOutlineHeart className="like" onClick={() => setLikeCard(true)} />
        )}

        <Link to="/appli/search/card" state={{ data, dataHorairesId }}>
          <div className="container-img">
            <img src={photoStructure1} alt="img-creche" />
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
          </div>
          <div className="info-creche">
            <div className="ville-prix">
              <p>à {distance} km</p>
              <p className="prix">{tarifHeure}€/heure</p>
            </div>
            <BlocJour dataHorairesId={dataHorairesId} />
            <ul>
              <li>N’accepte que les profils vérifiés</li>
              <li>Période d’adaptation obligatoire</li>
            </ul>
          </div>
        </Link>
      </div>
    )
  );
}

CarteCreche.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CarteCreche;
