import React from "react";
import PropTypes from "prop-types";
import TheCard from "../menu/TheCard";
import { toast } from "react-hot-toast";

function NotifPaye({ setCompo }) {
  const handlePaiement = () => {
    toast.success("merci 😘");
    setCompo(0);
  };

  return (
    <div className="notif-paye">
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Retour`}
        </button>
      </div>
      <h3>XXX € à payer</h3>
      <TheCard />
      <div className="button-bas">
        <button
          className="butt grad"
          type="button"
          onClick={() => handlePaiement(0)}
        >
          Confirmer la réservation
        </button>
      </div>
    </div>
  );
}

NotifPaye.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default NotifPaye;
