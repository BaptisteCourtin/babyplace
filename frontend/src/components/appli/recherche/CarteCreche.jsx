import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function CarteCreche({ data }) {
  const { photoStructure1, tarifHeure } = data;
  const [likeCard, setLikeCard] = useState(true);

  const tabJour = [
    { jour: "Lun", check: data.Lundi },
    { jour: "Mar", check: data.Mardi },
    { jour: "Mer", check: data.Mercredi },
    { jour: "Jeu", check: data.Jeudi },
    { jour: "Ven", check: data.Vendredi },
    { jour: "Sam", check: data.Samedi },
  ];

  return (
    <div className="carte-creche">
      {likeCard ? (
        <AiFillHeart className="like" onClick={() => setLikeCard(false)} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => setLikeCard(true)} />
      )}
      <Link to="/appli/search/card" state={{ data, tabJour }}>
        <img src={photoStructure1} alt="img creche" />
        <div className="info-creche">
          <div className="ville-prix">
            <p>ville à X mètres</p>
            <p className="prix">{tarifHeure}€</p>
          </div>
          <div className="jours">
            {tabJour.map((dataJour, index) => (
              <BlocJour
                jour={dataJour.jour}
                check={dataJour.check}
                key={index}
              />
            ))}
          </div>
          <ul>
            <li>N’accepte que les profils vérifiés</li>
            <li>Période d’adaptation obligatoire</li>
          </ul>
        </div>
      </Link>
    </div>
  );
}

CarteCreche.propTypes = {
  data: PropTypes.string.isRequired,
};

export default CarteCreche;
