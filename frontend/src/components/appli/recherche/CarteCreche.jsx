import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function CarteCreche({ data }) {
  const {
    isCreche,
    photoStructure1,
    tarifHeure,
    structureId,
    nom,
    nomUsage,
    nomNaissance,
    prenom,
  } = data;

  const [likeCard, setLikeCard] = useState(true);
  // les horaires de chaques jour suivant l'id de la structure
  const [dataHorairesId, setDataHorairesId] = useState([]);

  const Token =
    "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
  const getHorairesId = () => {
    axios
      .get(`http://localhost:5000/horaires/${structureId}`, {
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
    getHorairesId();
  }, []);

  const blueBg = {
    background: "linear-gradient( #7f72f266, #7f72f2cc)",
  };

  const pinkBg = {
    background: "linear-gradient( #f063a766, #f063a7cc)",
  };

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
          </div>
          <div className="info-creche">
            <div className="ville-prix">
              <p>ville à X mètres</p>
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
