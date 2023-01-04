import React from "react";
import PropTypes from "prop-types";

function CardNotif({ setCompo, texte, compo }) {
  return (
    <button
      type="button"
      className="card-notif"
      onClick={() => setCompo(compo)}
    >
      <p>{texte}</p>
      <span>{`>`}</span>
    </button>
  );
}

CardNotif.propTypes = {
  setCompo: PropTypes.func.isRequired,
  compo: PropTypes.number.isRequired,
  texte: PropTypes.string.isRequired,
};

export default CardNotif;
