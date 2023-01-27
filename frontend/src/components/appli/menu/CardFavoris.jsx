import React from "react";
import axios from "axios";
import PropTypes from "prop-types";

function CardFavPlat({ each, familleId, getFamilleLiked }) {
  const { nom, photoProfil, nomUsage, nomNaissance, prenom, structureId } =
    each;

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

    getFamilleLiked();
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
  getFamilleLiked: PropTypes.func.isRequired,
};

export default CardFavPlat;
