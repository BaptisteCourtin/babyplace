import React from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import PropTypes from "prop-types";

function BlocStar({ nom, nbStar }) {
  return (
    <div className="bloc-star">
      {nom}
      <Rating
        className="rating"
        emptySymbol={AiOutlineStar()}
        fullSymbol={AiFillStar()}
        initialRating={nbStar}
        readonly
      />
    </div>
  );
}

BlocStar.propTypes = {
  nom: PropTypes.string.isRequired,
  nbStar: PropTypes.number.isRequired,
};

export default BlocStar;
