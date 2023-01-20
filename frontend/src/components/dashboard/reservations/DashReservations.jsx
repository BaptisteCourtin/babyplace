import React, { useState } from "react";
import { useGetReservations } from "./Hooks/useGetReservations";
import { usePutReservations } from "./Hooks/usePutReservations";
import NavDashReservations from "./Components/Nav.DashReservations";
import ListDashReservations from "./Components/List.DashReservations";

function DashReservations({ tarifHeure }) {

  const [statusToggle, setStatusToggle] = useState(0);

  const { reser, getReser } = useGetReservations(statusToggle)
  const { updateStatus } = usePutReservations(getReser)

  return (
    <div className="dashReservations">
      <NavDashReservations
        statusToggle={statusToggle}
        setStatusToggle={setStatusToggle}
      />
      <ListDashReservations
        reser={reser}
        updateStatus={updateStatus}
        tarifHeure={tarifHeure}
        statusToggle={statusToggle}
      />
    </div>
  );
}

export default DashReservations;