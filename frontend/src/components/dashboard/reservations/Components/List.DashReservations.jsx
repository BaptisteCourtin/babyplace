import React from "react";
import InfoDashReservations from "./Info.DashReservations";
import StatusDashReservations from "./Status.DashReservations";

function ListDashReservations({
  reser,
  statusToggle,
  tarifHeure,
  updateStatus,
}) {
  return (
    <ul className="reserList">
      {reser
        .filter((r) => {
          if (statusToggle === 0) return r;
          if (statusToggle === 1) return r.status.includes("approved");
          if (statusToggle === 2) return r.status.includes("waiting");
          if (statusToggle === 3) return r.status.includes("refused");
          if (statusToggle === 4) return r.status.includes("canceled");
        })
        .map((r) => (
          <li
            style={{
              border: (() => {
                if (r.status === "approved") {
                  return "1px solid #2dcd7a";
                }
                if (r.status === "waiting") {
                  return "1px solid #FFA84C";
                }
                if (r.status === "refused") {
                  return "1px solid #EF3672";
                }
                if (r.status === "canceled") {
                  return "1px solid #4b5d68";
                }
              })(),
              opacity: (() => {
                if (r.status === "canceled" || r.status === "refused") {
                  return "0.4";
                }
                return "1";
              })(),
            }}
          >
            <p
              className="reserStatusColor"
              style={{
                backgroundColor: (() => {
                  if (r.status === "approved") {
                    return "#2dcd7a";
                  }
                  if (r.status === "waiting") {
                    return "#FFA84C";
                  }
                  if (r.status === "refused") {
                    return "#EF3672";
                  }
                  if (r.status === "canceled") {
                    return "#4b5d68";
                  }
                })(),
              }}
            />
            <InfoDashReservations r={r} tarifHeure={tarifHeure} />
            <StatusDashReservations r={r} updateStatus={updateStatus} />
          </li>
        ))}
    </ul>
  );
}

export default ListDashReservations;
