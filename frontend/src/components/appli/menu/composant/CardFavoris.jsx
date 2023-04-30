import React from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { AiOutlineUser } from "react-icons/ai";

// voir components Favoris
function CardFavPlat({ each, familleId, setSuppLiked, suppLiked }) {
  const { nom, photoProfil, nomUsage, nomNaissance, prenom, structureId } =
    each;

  // --- delete un like ---
  const handleClick = async () => {
    await axios
      .delete(
        `${
          import.meta.env.VITE_PATH
        }/famille/deleteLike/?familleId=${familleId}&structureId=${structureId}`,
        [familleId, structureId]
      )
      .catch((err) => {
        console.error(err);
      });

    setSuppLiked(!suppLiked);
  };

  return (
    <div className="card-favoris">
      {photoProfil ? (
        <img src={photoProfil} alt="avatar" className="avatar" />
      ) : (
        <AiOutlineUser className="avatar" />
      )}

      <p className="info">
        {nom ||
          (nomUsage ? `${prenom} ${nomUsage}` : ` ${prenom} ${nomNaissance}`)}
      </p>

      <button type="button" onClick={() => handleClick()}>
        Supp
      </button>
    </div>
  );
}

CardFavPlat.propTypes = {
  each: PropTypes.object.isRequired,
  familleId: PropTypes.string.isRequired,
  setSuppLiked: PropTypes.func.isRequired,
  suppLiked: PropTypes.bool.isRequired,
};

export default CardFavPlat;
