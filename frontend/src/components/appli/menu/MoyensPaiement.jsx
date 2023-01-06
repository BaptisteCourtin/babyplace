import React from "react";
import PropTypes from "prop-types";
import TheCard from "./TheCard";

function MoyensPaiement({ setCompo }) {
  return (
    <>
      <div className="button-top">
        <button className="butt big" type="button" onClick={() => setCompo(0)}>
          {`< Moyens De Paiement`}
        </button>
      </div>

      <TheCard />

      <div className="button-bas">
        <button className="butt grad" type="button" onClick={() => setCompo(0)}>
          Enregistrer
        </button>
      </div>
    </>
  );
}

MoyensPaiement.propTypes = {
  setCompo: PropTypes.func.isRequired,
};

export default MoyensPaiement;
