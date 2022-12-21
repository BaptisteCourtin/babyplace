import React, { useState, useEffect } from "react";
import axios from "axios";
import { Marker, Popup } from "react-leaflet";

const CardMarker = ({ oneStructure }) => {
  const [adresse, setAdresse] = useState();

  const getAdresse = () => {
    axios
      .get(`https://api-adresse.data.gouv.fr/search/?q=${oneStructure.adresse}`)
      .then((res) => {
        setAdresse(res.data.features[0].geometry.coordinates.reverse());
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getAdresse();
  }, []);

  return (
    adresse && (
      <Marker position={adresse}>
        <Popup>{oneStructure.nom}</Popup>
      </Marker>
    )
  );
};

export default CardMarker;
