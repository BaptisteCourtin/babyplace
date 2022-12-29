import React from "react";
import PropTypes from "prop-types";

function CardNotif({ texte }) {
  return (
    <div className="card-notif">
      <p>{texte}</p>
      <span>{`>`}</span>
    </div>
  );
}

CardNotif.propTypes = {
  texte: PropTypes.string.isRequired,
};

export default CardNotif;
