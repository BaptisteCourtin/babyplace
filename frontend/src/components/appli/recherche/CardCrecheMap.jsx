import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function CardCrecheMap({ data }) {
  const { photoStructure1, structureId, nom, nomUsage, nomNaissance, prenom } =
    data;

  const [likeCard, setLikeCard] = useState(true);

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
        </div>
      </Link>
    </div>
  );
}

export default CardCrecheMap;
