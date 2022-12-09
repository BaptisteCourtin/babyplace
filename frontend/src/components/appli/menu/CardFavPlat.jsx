import React from "react";
import PropTypes from "prop-types";
import { AiFillStar } from "react-icons/ai";

function CardFavPlat({ each }) {
  const { nom, note, image, texte } = each;
  return (
    <div className="card-fav-plat">
      <img src={image} alt="img" />
      <div className="texte">
        <h4>{nom}</h4>
        <p>{texte}</p>
      </div>
      <p className="note">
        {note} <AiFillStar />
      </p>
    </div>
  );
}

CardFavPlat.propTypes = {
  each: PropTypes.string.isRequired,
};

export default CardFavPlat;
