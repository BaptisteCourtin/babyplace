import React from "react";

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
        .map((fc) => {
          return (
            <li>
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
                Vous avez <span>{fc.nbPlaces}</span> places restantes le{" "}
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

export default AvailableDashAgenda;
