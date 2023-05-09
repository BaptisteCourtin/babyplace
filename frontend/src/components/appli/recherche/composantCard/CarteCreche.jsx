import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/composantCard/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart, AiFillStar } from "react-icons/ai";

function CarteCreche({
  data,
  userPosition,
  familleLiked,
  familleId,
  dataDateHeure,
}) {
  const {
    isCreche,
    photoStructure1,
    photoStructure2,
    photoStructure3,
    tarifHeure,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
    adresse,
  } = data;

  // --- si la carte est like or non ---
  const [thisLiked, setThisLiked] = useState(false);

  const likeOrNot = () => {
    for (let i = 0; i < familleLiked.length; i += 1) {
      if (familleLiked[i].structureIdLiked === structureId) {
        setThisLiked(true);
        break;
      }
    }
  };
  useEffect(() => {
    likeOrNot();
  }, [familleLiked]);

  // --- delete OU post un like sur la structure ---
  const handleLikeCard = async () => {
    if (thisLiked === true) {
      await axios
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
    } else if (thisLiked === false) {
      await axios
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

  // --- les horaires de chaques jour suivant l'id de la structure ---
  const [dataCalendarId, setDataCalendarId] = useState();

  const getCalendrierMoins = (source) => {
    axios
      .get(
        `${import.meta.env.VITE_PATH}/calendrier/whereMoins/${structureId}`,
        {
          cancelToken: source.token,
        }
      )
      .then((res) => {
        setDataCalendarId(res.data);
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  // --- filtres suivant si jour travaillé ou non ---
  const [dataHorairesId, setDataHorairesId] = useState([]);
  const getHorairesId = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/horaires/${structureId}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        let numPlaceJour;

        const isNumber = () => {
          // true => recurrent
          // false => occasionnel
          if (typeof dataDateHeure.jour === "number") {
            return true;
          }
          return false;
        };

        const isWorking = () => {
          // pour avoir la bonne place dans tableau pour horaires
          numPlaceJour = dataDateHeure.jour.split("&")[1];
          if (numPlaceJour == 0) {
            numPlaceJour = 6;
          } else numPlaceJour -= 1;

          const isWork = true;
          // suivant le jour (en jour) suivant table horaires
          if (res.data[numPlaceJour].ouvert === 0) {
            return false;
          }
          // suivant le jour (en date) suivant table calendrier
          for (let i = 0; i < dataCalendarId.length; i += 1) {
            if (dataCalendarId[i].date === dataDateHeure.jour.split("&")[0]) {
              return false;
            }
          }
          return isWork;
        };

        if (
          dataDateHeure.jour === "" ||
          // dataDateHeure.jour N'EST PAS UN NOMBRE => occas
          (isNumber() === false &&
            isWorking() === true &&
            (dataDateHeure.heureMin === "" ||
              res.data[numPlaceJour].heureMin <= dataDateHeure.heureMin) &&
            (dataDateHeure.heureMax === "" ||
              res.data[numPlaceJour].heureMax >= dataDateHeure.heureMax)) ||
          // dataDateHeure.jour EST UN NOMBRE => récurrent
          (isNumber() === true &&
            res.data[dataDateHeure.jour].ouvert === 1 &&
            (dataDateHeure.heureMin === "" ||
              res.data[dataDateHeure.jour].heureMin <=
                dataDateHeure.heureMin) &&
            (dataDateHeure.heureMax === "" ||
              res.data[dataDateHeure.jour].heureMax >= dataDateHeure.heureMax))
        ) {
          setDataHorairesId(res.data);
        }
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
    dataCalendarId !== undefined && getHorairesId(source);
    return () => {
      source.cancel();
    };
  }, [dataCalendarId]);

  // --- prend la position de la structure ---
  const [center, setCenter] = useState([0, 0]);

  const handleDistance = (source) => {
    // api convertir adresse en position gps
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${adresse}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setCenter(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  // --- calcul distance entre structure et position ---
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

  // --- avis moyen sur la structure ---
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

  // --- couleur si creche OU assMat ---
  const blueBg = {
    background: "linear-gradient( #7f72f266, #7f72f2cc)",
  };

  const pinkBg = {
    background: "linear-gradient( #f063a766, #f063a7cc)",
  };

  useEffect(() => {
    const source = axios.CancelToken.source();
    getCalendrierMoins(source);
    handleDistance(source);
    staring();
    return () => {
      source.cancel();
    };
  }, []);

  return (
    dataHorairesId.length !== 0 && (
      <div className="carte-creche" style={isCreche ? blueBg : pinkBg}>
        {familleId ? (
          thisLiked ? (
            <AiFillHeart className="like" onClick={() => handleLikeCard()} />
          ) : (
            <AiOutlineHeart className="like" onClick={() => handleLikeCard()} />
          )
        ) : null}

        <Link
          to="/appli/search/card"
          state={{ data, dataHorairesId, familleId }}
        >
          <div className="container-img">
            <img
              src={photoStructure1 || photoStructure2 || photoStructure3}
              alt="img-creche"
            />
            <p className="nom-structure">
              {nom ||
                (nomUsage
                  ? `${prenom} ${nomUsage}`
                  : `${prenom} ${nomNaissance}`)}
            </p>
            {data.nbNotes > 0 ? (
              <div className="star-all">
                {nbStarMoyen}
                {AiFillStar()}
              </div>
            ) : (
              <div className="star-all">Nouveau</div>
            )}
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
  userPosition: PropTypes.array.isRequired,
  familleLiked: PropTypes.array.isRequired,
  familleId: PropTypes.string,
  dataDateHeure: PropTypes.object.isRequired,
};

export default CarteCreche;
