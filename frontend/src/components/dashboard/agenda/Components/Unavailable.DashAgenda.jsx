import React from "react";

function UnavailableDashAgenda({
  calendar,
  structureId,
  date,
  addSleepDate,
  addWorkDate,
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
        </>
      )}
    </>
  );
}

export default UnavailableDashAgenda;
