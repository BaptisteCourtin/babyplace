import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";
import PropTypes from "prop-types";

function CardMarker({ data }) {
  const { nom, nomUsage, nomNaissance, prenom } = data;

  const [adresseGPS, setAdresseGPS] = useState();

  // api convertir adresse en position gps
  const getAdresse = () => {
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${data.adresse}`)
      .then((res) => {
        setAdresseGPS(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  // prendre horaires back pour passer dans card
  const [dataHorairesId, setDataHorairesId] = useState([]);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getHorairesId = () => {
    axios
      .get(`http://localhost:5000/horaires/${data.structureId}`, {
        headers: {
          "x-token": Token,
        },
      })
      .then((res) => {
        setDataHorairesId(res.data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAdresse();
    getHorairesId();
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
      // <Marker position={[0, 0]}>
      //   <Popup>
      //     A pretty CSS3 popup. <br /> Easily customizable.
      //   </Popup>
      // </Marker>
    )
  );
}

CardMarker.propTypes = {
  data: PropTypes.object.isRequired,
};

export default CardMarker;
