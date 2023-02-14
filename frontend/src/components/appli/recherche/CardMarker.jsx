import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function CardMarker({ data }) {
  const { nom, nomUsage, nomNaissance, prenom } = data;

  // --- adresse ---

  const [adresseGPS, setAdresseGPS] = useState();
  // api convertir adresse en position gps
  const getAdresse = (source) => {
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${data.adresse}`, {
        cancelToken: source.token,
      })
      .then((res) => {
        setAdresseGPS(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        if (err.code === "ERR_CANCELED") {
          console.warn("cancel request");
        } else {
          console.error(err);
        }
      });
  };

  // --- prendre horaires back pour passer dans card pour resa ---
  const [dataHorairesId, setDataHorairesId] = useState([]);

  const getHorairesId = (source) => {
    axios
      .get(`${import.meta.env.VITE_PATH}/horaires/${data.structureId}`, {
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

  useEffect(() => {
    const source = axios.CancelToken.source();
    getAdresse(source);
    getHorairesId(source);
    return () => {
      source.cancel();
    };
  }, []);

  return (
    adresseGPS && (
      <Marker position={adresseGPS}>
        <Popup>
          <Link to="/appli/search/card" state={{ data, dataHorairesId }}>
            {nom ||
              (nomUsage
                ? `${prenom} ${nomUsage}`
                : `${prenom} ${nomNaissance}`)}
          </Link>
        </Popup>
      </Marker>
    )
  );
}

CardMarker.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardMarker;
