import React from "react";
import PropTypes from "prop-types";
import TheCard from "../menu/TheCard";

function NotifPaye({ setCompo }) {
  return (
    <div className="notif-paye">
      <h3>XXX € à payer</h3>
      <TheCard />
      <div className="button-bas">
        <button className="butt grad" type="button" onClick={() => setCompo(0)}>
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
