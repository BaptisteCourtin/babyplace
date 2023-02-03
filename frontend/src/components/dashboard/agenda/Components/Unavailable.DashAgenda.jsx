import React from "react";

function UnavailableDashAgenda({
  calendar,
  structureId,
  date,
  day,
  dayId,
  addSleepDate,
  addWorkDate,
  updateClose
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

export default UnavailableDashAgenda;
