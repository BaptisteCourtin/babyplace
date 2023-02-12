import React from "react";
import PropTypes from "prop-types";

function AvailableDashAgenda({ calendar, structureId, date, curDate }) {
  return (
    <ul className="agendaDaysFree">
      {calendar
        .filter(
          (c) =>
            c.structureId === structureId &&
            c.date !== date &&
            Date.parse(c.date) > Date.parse(curDate) &&
            c.nbPlaces != -1
        )
        .slice(0, 2)
        .sort((a, b) => a.date.localeCompare(b.date))
        .map((fc, index) => {
          return (
            <li key={index}>
              {fc.nbPlaces < 4 ? (
                <span
                  className="agendaAlertSign"
                  style={{ backgroundColor: "rgba(239, 54, 114, 0.6)" }}
                >
                  !
                </span>
              ) : (
                <span
                  className="agendaAlertSign"
                  style={{
                    backgroundColor: "rgba(45, 205, 122, 0.6)",
                  }}
                >
                  +
                </span>
              )}
              <p>
                Vous avez <span>{fc.nbPlaces}</span>{" "}
                {fc.nbPlaces == 1 ? "place" : "places"} restantes le{" "}
                <span>
                  {fc.date.split("-")[2]} / {fc.date.split("-")[1]} /{" "}
                  {fc.date.split("-")[0]}
                </span>
              </p>
            </li>
          );
        })}
    </ul>
  );
}

AvailableDashAgenda.propTypes = {
  calendar: PropTypes.array.isRequired,
  structureId: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  curDate: PropTypes.string.isRequired,
};

export default AvailableDashAgenda;
