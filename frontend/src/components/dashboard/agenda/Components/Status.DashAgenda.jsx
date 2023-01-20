import React from "react";
import ClosedDashStatus from "./Status/Closed.DashStatus";
import FullDashStatus from "./Status/Full.DashStatus";
import OpenDashStatus from "./Status/Open.DashStatus";

function StatusDashAgenda({
  calendar,
  structureId,
  date,
  updateStatusOpen,
  maxPlaces,
  places,
  setPlaces,
  setCalendarIndex,
  updatePlaces,
  updateStatusClose,
  fullDate,
}) {
  return (
    <>
      {calendar
        .filter((c) => c.structureId === structureId && c.date === date)
        .map((fc) =>
          fc.nbPlaces == -1 ? (
            <ClosedDashStatus fc={fc} updateStatusOpen={updateStatusOpen} />
          ) : (
            <>
              <OpenDashStatus
                fc={fc}
                maxPlaces={maxPlaces}
                places={places}
                setPlaces={setPlaces}
                setCalendarIndex={setCalendarIndex}
                updatePlaces={updatePlaces}
              />
              <p className="agendaPlacesChoice">
                <span>ou</span>
              </p>
              <FullDashStatus
                fc={fc}
                updateStatusClose={updateStatusClose}
                fullDate={fullDate}
              />
            </>
          )
        )}
    </>
  );
}

export default StatusDashAgenda;
