import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { toast } from "react-hot-toast";
import TheCard from "../menu/TheCard";

function NotifPaye({ setCompo, oneReservation }) {
  const handlePaiement = () => {
    axios.put(`${import.meta.env.VITE_PATH}/reservation/status`, {
      status: "payed",
      id: oneReservation.id,
    });
    toast.success("merci 😘");
  };

  return (
    <div className="notif-paye">
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Retour`}
        </button>
      </div>
      <h3>{oneReservation.prixTotal} € à payer</h3>
      <TheCard />
      <div className="button-bas">
        <button
          className="butt grad"
          type="button"
          onClick={() => handlePaiement(0)}
        >
          <Link to="/appli/search">Confirmer la réservation</Link>
        </button>
      </div>
    </div>
  );
}

NotifPaye.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default NotifPaye;
