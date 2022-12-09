import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function CarteCreche({ each, image }) {
  const { prix, jours, condition, like } = each;
  const [likeCard, setLikeCard] = useState(like);
  return (
    <div className="carte-creche">
      {likeCard ? (
        <AiFillHeart className="like" onClick={() => setLikeCard(false)} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => setLikeCard(true)} />
      )}
      <Link to="/appli/search/card" state={{ each, image }}>
        <img src={image} alt="img creche" />
        <div className="info-creche">
          <div className="ville-prix">
            <p>ville à X mètres</p>
            <p className="prix">{prix}€</p>
          </div>
          <div className="jours">
            {jours.map((eachJour, index) => (
              <BlocJour
                jour={eachJour.jour}
                check={eachJour.check}
                key={index}
              />
            ))}
          </div>
          <ul>
            {condition.verif ? (
              <li>N’accepte que les profils vérifiés</li>
            ) : null}
            {condition.essai ? <li>Période d’adaptation obligatoire</li> : null}
          </ul>
        </div>
      </Link>
    </div>
  );
}

CarteCreche.propTypes = {
  each: PropTypes.string.isRequired,
};

export default CarteCreche;
