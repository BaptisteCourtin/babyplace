import React from "react";
import PropTypes from "prop-types";

function DayOffDashAgenda({ updateDay }) {
  return (
    <button
      type="button"
      className="dashNotWorking"
      onClick={() => {
        updateDay(1);
      }}
    >
      Envie de travailler ?
    </button>
  );
}

DayOffDashAgenda.propTypes = {
  updateDay: PropTypes.func.isRequired,
};

export default DayOffDashAgenda;
