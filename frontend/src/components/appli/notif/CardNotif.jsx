import React from "react";
import PropTypes from "prop-types";

function CardNotif({ setCompo, texte, compo }) {
  return (
    <div className="card-notif" onClick={() => setCompo(compo)}>
      <p>{texte}</p>
      <span>{`>`}</span>
    </div>
  );
}

CardNotif.propTypes = {
  texte: PropTypes.string.isRequired,
};

export default CardNotif;
