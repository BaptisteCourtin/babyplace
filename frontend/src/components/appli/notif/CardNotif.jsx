import React from "react";

function CardNotif({ texte }) {
  return (
    <div className="card-notif">
      <p>{texte}</p>
      <span>{`>`}</span>
    </div>
  );
}

export default CardNotif;
