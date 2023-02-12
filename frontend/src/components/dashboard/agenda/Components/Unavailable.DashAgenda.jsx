import React from "react";
import PropTypes from "prop-types";

function UnavailableDashAgenda({
  calendar,
  structureId,
  date,
  day,
  dayId,
  addSleepDate,
  addWorkDate,
  updateClose,
}) {
  return (
    <>
      {calendar.every(
        (c) => c.structureId === structureId && c.date !== date
      ) && (
        <>
          <button
            type="button"
            className="agendaPlacesWork"
            onClick={() => addSleepDate()}
          >
            Repos
          </button>
          <button
            type="button"
            className="agendaPlacesWork"
            onClick={() => addWorkDate()}
          >
            Places restantes
          </button>
          <button
            type="button"
            className="agendaPlacesWork"
            onClick={() => updateClose(dayId.horairesId)}
          >
            Fermer tous les <span>{day}s</span>
          </button>
        </>
      )}
    </>
  );
}

UnavailableDashAgenda.propTypes = {
  calendar: PropTypes.array.isRequired,
  structureId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  day: PropTypes.string.isRequired,
  dayId: PropTypes.number,
  addSleepDate: PropTypes.func.isRequired,
  addWorkDate: PropTypes.func.isRequired,
  updateClose: PropTypes.func.isRequired,
};

export default UnavailableDashAgenda;
