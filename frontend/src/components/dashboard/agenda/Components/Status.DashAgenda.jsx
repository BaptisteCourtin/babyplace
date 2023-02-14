import React from "react";
import PropTypes from "prop-types";
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
        .map((fc, index) =>
          fc.nbPlaces == -1 ? (
            <ClosedDashStatus
              key={index}
              fc={fc}
              updateStatusOpen={updateStatusOpen}
            />
          ) : (
            <div key={index}>
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
            </div>
          )
        )}
    </>
  );
}

StatusDashAgenda.propTypes = {
  calendar: PropTypes.array.isRequired,
  structureId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  updateStatusOpen: PropTypes.func.isRequired,
  maxPlaces: PropTypes.number.isRequired,
  places: PropTypes.object,
  setPlaces: PropTypes.func.isRequired,
  setCalendarIndex: PropTypes.func.isRequired,
  updatePlaces: PropTypes.func.isRequired,
  updateStatusClose: PropTypes.func.isRequired,
  fullDate: PropTypes.func.isRequired,
};

export default StatusDashAgenda;
