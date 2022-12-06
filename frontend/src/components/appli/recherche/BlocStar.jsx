import React from "react";
import Rating from "react-rating";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";

function BlocStar({ nom, nbStar }) {
  return (
    <div className="bloc-star">
      {nom}
      {/* <Rating
        emptySymbol={AiOutlineStar()}
        fullSymbol={AiFillStar()}
        fractions={2}
      /> */}
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

export default BlocStar;
