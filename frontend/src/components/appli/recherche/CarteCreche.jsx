import React, { useState } from "react";
import { Link } from "react-router-dom";
import BlocJour from "@components/appli/recherche/BlocJour";
import PropTypes from "prop-types";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

function CarteCreche({ each }) {
  const { image, prix, jours, condition, like } = each;
  const [likeCard, setLikeCard] = useState(like);
  return (
    <div className="carte-creche">
      {likeCard ? (
        <AiFillHeart className="like" onClick={() => setLikeCard(false)} />
      ) : (
        <AiOutlineHeart className="like" onClick={() => setLikeCard(true)} />
      )}
      <Link to="/appli/search/card" state={{ each }}>
        <img src={image} alt="img creche" />
        <div className="info-creche">
          <div className="ville-prix">
            <p>ville à X mètres</p>
            <p className="prix">{prix}€</p>
          </div>
          <div className="jours">
            {jours.map((eachJour) => (
              <BlocJour jour={eachJour.jour} check={eachJour.check} />
            ))}
          </div>
          {condition.verif ? <p>N’accepte que les profils vérifiés</p> : null}
          {condition.essai ? <p>Période d’adaptation obligatoire</p> : null}
        </div>
      </Link>
    </div>
  );
}

CarteCreche.propTypes = {
  each: PropTypes.string.isRequired,
};

export default CarteCreche;
