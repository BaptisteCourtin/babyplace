import React from "react";
import PropTypes from "prop-types";

function FullDashStatus({ fc, updateStatusClose, fullDate }) {
  return (
    <>
      <button
        className="agendaPlacesWork"
        onClick={() => {
          updateStatusClose(fc.calendrierId);
        }}
      >
        Repos
      </button>
      <button
        className="agendaPlacesWork"
        onClick={() => {
          fullDate(fc.calendrierId);
        }}
      >
        Complet
      </button>
    </>
  );
}

FullDashStatus.propTypes = {
  fc: PropTypes.object.isRequired,
  updateStatusOpen: PropTypes.func.isRequired,
  fullDate: PropTypes.string.isRequired,
};

export default FullDashStatus;
