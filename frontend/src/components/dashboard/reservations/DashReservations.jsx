import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import useGetReservations from "./Hooks/useGetReservations";
import usePutReservations from "./Hooks/usePutReservations";
import NavDashReservations from "./Components/Nav.DashReservations";
import ListDashReservations from "./Components/List.DashReservations";

function DashReservations({ tarifHeure, structureId }) {
  const [statusToggle, setStatusToggle] = useState(0);

  const { reser, getReser } = useGetReservations(structureId);
  const { updateStatus } = usePutReservations(getReser);

  useEffect(() => {
    getReser();
  }, [statusToggle]);

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
        getReser={getReser}
      />
    </div>
  );
}

DashReservations.propTypes = {
  tarifHeure: PropTypes.number.isRequired,
  structureId: PropTypes.number.isRequired,
};

export default DashReservations;
