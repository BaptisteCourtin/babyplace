import React from "react";
import PropTypes from "prop-types";

function ClosedDashStatus({ fc, updateStatusOpen }) {
  return (
    <>
      <p>Vous ne travaillez pas 😀</p>
      <button
        type="button"
        className="agendaPlacesWork"
        onClick={() => {
          updateStatusOpen(fc.calendrierId);
        }}
      >
        Ouvrir
      </button>
    </>
  );
}

ClosedDashStatus.propTypes = {
  fc: PropTypes.object.isRequired,
  updateStatusOpen: PropTypes.func.isRequired,
};

export default ClosedDashStatus;
