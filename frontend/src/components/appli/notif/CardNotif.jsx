import React from "react";
import PropTypes from "prop-types";

function CardNotif({ each, setCompo, setOneReservation }) {
  // --- quand on clique sur l'une des cartes ---
  const handleClicked = () => {
    setOneReservation(each);
    // toNote => 1 / approved => 3 / refued => 2
    setCompo(each.status === "toNote" ? 1 : each.status === "approved" ? 3 : 2);
  };

  return (
    <button
      type="button"
      className="card-notif"
      onClick={() => handleClicked()}
    >
      {each.status === "toNote" ? (
        <p>
          Donnez-nous <span className="avis">votre avis</span> sur{" "}
          {each.crecheNom
            ? each.crecheNom
            : each.assMatNomUsage
            ? `${each.assMatPrenom} ${each.assMatNomUsage}`
            : ` ${each.assMatPrenom} ${each.assMatNomNaissance}`}
        </p>
      ) : (
        <p>
          Votre demande de réservation à{" "}
          {each.crecheNom
            ? each.crecheNom
            : each.assMatNomUsage
            ? `${each.assMatPrenom} ${each.assMatNomUsage}`
            : ` ${each.assMatPrenom} ${each.assMatNomNaissance}`}{" "}
          a été
          <span
            className={each.status === "approved" ? "accepted" : "rejected"}
          >
            {each.status === "approved" ? " acceptée" : " rejetée"}
          </span>
        </p>
      )}

      <span>{`>`}</span>
    </button>
  );
}

CardNotif.propTypes = {
  each: PropTypes.object.isRequired,
  setOneReservation: PropTypes.func.isRequired,
  setCompo: PropTypes.func.isRequired,
};

export default CardNotif;
